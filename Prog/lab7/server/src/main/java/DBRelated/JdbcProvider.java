package DBRelated;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.sql.Types;
import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Scanner;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import Collection.CollectionObject.Coordinates;
import Collection.CollectionObject.Label;
import Collection.CollectionObject.MusicBand;
import Collection.CollectionObject.MusicGenre;
import Collection.Validators.MusicBandValidator;
import Communication.CommandResult;
import Communication.Hasher;
import Communication.User;
import Managers.CollectionManager;

public class JdbcProvider {
    private final static String JDBC_DRIVER = "org.postgresql.Driver";
    private static Connection connection;
    private static Logger logger = LogManager.getLogger(JdbcProvider.class);
    
    public static void establishConnection(){
        try {
            Class.forName(JDBC_DRIVER);
            try (Scanner credentials = new Scanner(new FileReader("pg.cfg"))) {
				String url = credentials.nextLine();
				String user = credentials.nextLine();
				String password = credentials.nextLine();
				credentials.close();
				connection = DriverManager.getConnection(url, user, password);
			} catch (FileNotFoundException e) {
				System.out.println("No config file for DB connection found " + e.getMessage());
                System.exit(0);
			} 
            logger.info("Connection with db is established ");
        } catch (SQLException e) {
            e.printStackTrace();
            System.exit(0);
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }
    
    public static void registerUser(User user){
        String username = user.getUsername();
        String password = user.getPassword();
        String salt = Hasher.generateSalt();
        String hashedPassword = Hasher.encryptPswdMD2(password, salt);
        String query = "INSERT INTO users (username, hashedpassword, salt) VALUES (?, ?, ?)";

        try (PreparedStatement p = connection.prepareStatement(query)){
            p.setString(1, username);
            p.setString(2, hashedPassword);
            p.setString(3, salt);
            p.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static boolean checkUserPassword(User user) {
        var username = user.getUsername();
        var enteredPassword = user.getPassword();
    
        String query = "SELECT hashedpassword, salt FROM users WHERE username = ?";
    
        try (PreparedStatement p = connection.prepareStatement(query)) {
            p.setString(1, username);
            ResultSet res = p.executeQuery();
    
            if (res.next()) {
                String storedHashedPassword = res.getString("hashedpassword");
                String storedSalt = res.getString("salt");
    
                // Хэшируем введенный пароль с сохраненной солью
                String enteredHashedPassword = Hasher.encryptPswdMD2(enteredPassword, storedSalt);
    
                return storedHashedPassword.equals(enteredHashedPassword);
            }
        } catch (SQLException e) {
            logger.info("SQLException during checking for password: " + e.getMessage());
            return false;
        }
        return false;
    }    
    

    public static boolean userIsRegistered(String username) {
        String sql = "SELECT COUNT(*) FROM users WHERE username = ?";
    
        try (PreparedStatement pstmt = connection.prepareStatement(sql)) {
            pstmt.setString(1, username);
            ResultSet rs = pstmt.executeQuery();
            if (rs.next()) {
                return rs.getInt(1) > 0;
            }
        } catch (SQLException e) {
            logger.info("SQLException during checking for username: " + e.getMessage());
            return false;
        }
        return false;
    }
    

    public static void initializeDatabase() {
        try (Statement stmt = connection.createStatement()) {
			{
			    String usersQuery = "CREATE TABLE IF NOT EXISTS users (" +
			             "user_id SERIAL PRIMARY KEY NOT NULL, " +
			             "username TEXT UNIQUE NOT NULL, " +
			             "hashedpassword TEXT NOT NULL, " + 
                         "salt TEXT NOT NULL" +
                         ")";
			    stmt.execute(usersQuery);

                String musicBandsQuery = "CREATE TABLE IF NOT EXISTS music_bands ( id SERIAL PRIMARY KEY NOT NULL," +
                            "name VARCHAR(255) NOT NULL," +
                            "x INT NOT NULL , y INT NOT NULL," +
                            "creationDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP," +
                            "numberOfParticipants INT CHECK (numberOfParticipants > 0)," +
                            "albumsCount BIGINT CHECK (albumsCount > 0)," +
                            "establishmentDate TIMESTAMP WITH TIME ZONE," + 
                            "genre VARCHAR(255) NOT NULL," +
                            "label_name VARCHAR(255), label_number_of_bands BIGINT NOT NULL," +
                            "creator_name VARCHAR(255) REFERENCES users(username) " +
                            ");";

                stmt.execute(musicBandsQuery);

                
        }
		} catch (SQLException e) {
            e.printStackTrace();
            logger.fatal("Database initialization failed: " + e.getMessage());
            System.exit(0);
		}
    }
    
    public synchronized static CommandResult addMusicBand(MusicBand musicBand){

        String query = "INSERT INTO music_bands (name, x, y, creationDate, numberOfParticipants, albumsCount, establishmentDate, genre, label_name, label_number_of_bands, creator_name)" +
                        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        System.out.println(musicBand);
        try {
            // System.out.println("bandname " + musicBand.getName());
            PreparedStatement p = connection.prepareStatement(query);
            // logger.info("in addmusicband");
            System.out.println("bandname " + musicBand.getName());
            p.setString(1, musicBand.getName());
            // logger.info("2");
            p.setFloat(2, musicBand.getCoordinates().getX());
            // logger.info("3");
            p.setDouble(3, musicBand.getCoordinates().getY());
            Timestamp creationDate = Timestamp.from(Instant.now());
            // logger.info("4");
            p.setTimestamp(4, creationDate);
            // logger.info("5");
            p.setInt(5, musicBand.getNumberOfParticipants());
            
            if (musicBand.getAlbumsCount() == null){
                p.setNull(6, Types.BIGINT);
            }
            else{
                p.setLong(6, musicBand.getAlbumsCount());
            }

            OffsetDateTime establishmentDate = musicBand.getEstablishmentDate() == null ? null : musicBand.getEstablishmentDate().toOffsetDateTime();
            if(establishmentDate == null){
                p.setNull(7, Types.TIMESTAMP_WITH_TIMEZONE);
            }
            else{
                p.setObject(7, establishmentDate);
            }
            p.setString(8, musicBand.getGenre().name());
            String labelName = musicBand.getLabel().getName();
            if (labelName == null){
                p.setNull(9, Types.VARCHAR);
            }
            else{
                p.setString(9, musicBand.getLabel().getName());
            }
            p.setLong(10, musicBand.getLabel().getBands());
            // logger.info("10");
            // logger.info("creator: " + musicBand.getCreator());
            p.setString(11, musicBand.getCreator());
            p.executeUpdate();
            // logger.info("update executed");
            return new CommandResult(true, null, "add", "MusicBand has been added");

        } catch (SQLException e) {
            e.printStackTrace();
            return new CommandResult(false, e.getMessage(), "add");
        }
    }

    public static void loadCollectionToMemory(){
        String query = "SELECT id, name, x, y, creationDate, numberOfParticipants, albumsCount, establishmentDate, genre, label_name, label_number_of_bands, creator_name " +
                       "FROM music_bands JOIN users ON users.username = music_bands.creator_name";
        CollectionManager collectionManager = CollectionManager.getInstance();
        
        try (PreparedStatement p = connection.prepareStatement(query)) {
            ResultSet res = p.executeQuery();

            while (res.next()) {
                try {
                    Long id = res.getLong(1);
                    String name = res.getString(2);
                    int x = res.getInt(3);
                    int y = res.getInt(4);
                    Date creationDate = res.getDate(5);
                    int numberOfParticipants = res.getInt(6);
                    Long albumsCount = res.getObject(7) != null ? res.getLong(7) : null;
                    Timestamp establishmentTimestamp = res.getTimestamp(8);
                    ZonedDateTime establishmentDate = establishmentTimestamp != null 
                        ? establishmentTimestamp.toInstant().atZone(ZoneId.of("Europe/Moscow")) 
                        : null;
                    MusicGenre genre = MusicGenre.valueOf(res.getString(9));
                    String labelName = res.getString(10);
                    Long labelNumberOfBands = res.getLong(11);
                    String creatorName = res.getString(12);

                    var element = new MusicBand(
                        id,
                        name,
                        new Coordinates(x, y),
                        creationDate,
                        numberOfParticipants,
                        albumsCount,
                        establishmentDate,
                        genre,
                        new Label(labelName, labelNumberOfBands),
                        creatorName
                    );
                    if (MusicBandValidator.getInstance().validate(element)){
                        collectionManager.addElementToCollection(element);
                    }
                    else{
                        throw new SQLException("One of the elements is corrupted:" + element.toString());
                    }
                } catch (IllegalArgumentException e) {
                    logger.error("ID problem " + res.getLong(1), e);
                }
            }
        } catch (SQLException e) {
            System.out.println(e);
            // e.printStackTrace();
            System.exit(0);
            //logger.error("error during loading: " + e.getMessage());
        }
    }

    public synchronized static CommandResult clearMusicBand(User user){

        String query = "DELETE FROM music_bands WHERE creator_name = ?";

        try (PreparedStatement p = connection.prepareStatement(query)){
            p.setString(1, user.getUsername());
            p.executeUpdate();
            return new CommandResult(true, null, "clear");

        } catch (SQLException e) {
            e.printStackTrace();
            logger.error("Query execution failed: " + e.getMessage());
            return new CommandResult(false, e.getMessage(), "clear");
        }
    }

    public synchronized static CommandResult groupCountingById(User user, long targetId) {
        // logger.info("in groupCountingById jdbc");
        String query = "SELECT COUNT(*) FROM music_bands WHERE id < ? AND creator_name = ?";
        try {
            PreparedStatement pstmt = connection.prepareStatement(query);
            pstmt.setLong(1, targetId);
            pstmt.setString(2, user.getUsername());
            logger.info("after setting id and name");
            try (ResultSet rs = pstmt.executeQuery()) {
                logger.info("after executing query");
                if (rs.next()) {
                    return new CommandResult (true, null, "groupCountingById", Integer.toString(rs.getInt(1)));
                }
                else{
                    return new CommandResult(false, "No such elements", "groupCountingById");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
            logger.error("Query execution failed: " + e.getMessage());
            return new CommandResult(false, e.getMessage(), "groupCountingById");
        }
    }

    public synchronized static CommandResult removeById(User user, long id) {
        // logger.info("user, id from jbc " + user + "," + id);
        String query = "DELETE FROM music_bands WHERE (id = ? AND creator_name = ?)";
        try {
            PreparedStatement pstmt = connection.prepareStatement(query);
            pstmt.setLong(1, id);
            pstmt.setString(2, user.getUsername());
            int affectedRows = pstmt.executeUpdate();
            
            if (affectedRows == 0) {
                return new CommandResult(false, "No rows are deleted", "removeById");
            }
            
        } catch (SQLException e) {
            e.printStackTrace();
            logger.error("Query execution failed during remove_by_id " + e.getMessage());
            return new CommandResult(false, e.getMessage(), "removeById");
        }
        return new CommandResult(true, null, "removeById");
    }

    public synchronized static CommandResult removeLower(User user, long id){
        String query = "DELETE FROM music_bands WHERE (id < ? AND creator_name = ?)";
        // logger.info("user, id from jbc " + user + ","+ id);
        
        try {
            PreparedStatement pstmt = connection.prepareStatement(query);
            pstmt.setLong(1, id);
            pstmt.setString(2, user.getUsername());
            int affectedRows = pstmt.executeUpdate();
            
            if (affectedRows == 0) {
                return new CommandResult(false, "No rows are deleted", "removeById");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            logger.error("Query execution failed during remove_lower " + e.getMessage());
            return new CommandResult(false, e.getMessage(), "removeLower");
        }
        return new CommandResult(true, null, "removeLower");
    }

    public synchronized static CommandResult updateId(User user, long id, MusicBand musicBand){
        String query = "UPDATE music_bands SET name = ?, x = ?, y = ?, creationDate = ?, numberOfParticipants = ?, albumsCount = ?, establishmentDate = ?, genre = ?, label_name = ?, label_number_of_bands = ?, creator_name = ?, "+
        "WHERE (id = ? AND creator_name = ?)";
        try {
			PreparedStatement p = connection.prepareStatement(query);
            p.setString(1, musicBand.getName());
            p.setInt(2, musicBand.getCoordinates().getX());
            p.setInt(3, musicBand.getCoordinates().getY());
            p.setDate(4, new java.sql.Date(musicBand.getCreationDate().getTime()));
            p.setInt(5, musicBand.getNumberOfParticipants());
            if (musicBand.getAlbumsCount() == null){
                p.setNull(6, Types.BIGINT);
            }
            else{
                p.setLong(6, musicBand.getAlbumsCount());
            }
            OffsetDateTime establishmentDate = musicBand.getEstablishmentDate() == null ? null : musicBand.getEstablishmentDate().toOffsetDateTime();
            if(establishmentDate == null){
                p.setNull(7, Types.TIMESTAMP_WITH_TIMEZONE);
            }
            else{
                p.setObject(7, establishmentDate);
            }
            p.setString(8, musicBand.getGenre().name());
            String labelName = musicBand.getLabel().getName();
            if (labelName == null){
                p.setNull(9, Types.VARCHAR);
            }
            else{
                p.setString(9, musicBand.getLabel().getName());
            }
            p.setLong(10, musicBand.getLabel().getBands());
            p.setString(11, musicBand.getCreator());

            p.setString(12, user.getUsername());
            p.setLong(13, id);

            int result = p.executeUpdate();
            if (result == 1){
                return new CommandResult(true, null, "updateId");
            }
            else if (result == 0){
                return new CommandResult(false, "Command did not change anything", "updateId");
            }
		} catch (SQLException e) {
			e.printStackTrace();
            logger.error("Query execution failed during updateID " + e.getMessage());
            return new CommandResult(false, e.getMessage(), "updateId");
		}
        return new CommandResult(false, null, "updateId");
    }
}
