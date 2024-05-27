package DBRelated;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import Communication.Hasher;
import Communication.User;

public class JdbcProvider {
    private final static String JDBC_DRIVER = "org.postgresql.Driver";
    private static Connection connection;
    private static Logger logger = LogManager.getLogger(JdbcProvider.class);
    
    public void establishConnection(){
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
    
    public void registerUser(User user){
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

    public boolean checkUserPassword(User user) {
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
    

    public boolean userIsRegistered(String username) {
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
    

    public void initializeDatabase() {
        try (Statement stmt = connection.createStatement()) {
			{
			    String sql = "CREATE TABLE IF NOT EXISTS users (" +
			             "user_id SERIAL PRIMARY KEY, " +
			             "username TEXT UNIQUE NOT NULL, " +
			             "hashedpassword TEXT NOT NULL, " + 
                         "salt TEXT NOT NULL" +
                         ")";
			stmt.execute(sql);
        }
		} catch (SQLException e) {
            e.printStackTrace();
            logger.fatal("Database initialization failed: " + e.getMessage());
            System.exit(0);
		}
    } 
}
