package Collection.CollectionObject;

import java.io.Serializable;
import java.time.ZonedDateTime;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlAttribute;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;
import jakarta.xml.bind.annotation.adapters.XmlJavaTypeAdapter;

/**
 * Main class representing a MusicBand type with fields like id, name, genre etc.
 */
@XmlType(propOrder = { "id", "name", "coordinates", "numberOfParticipants", "creationDate", "albumsCount",
        "establishmentDate", "genre", "label" })
@XmlRootElement
@XmlAccessorType(XmlAccessType.FIELD)
public class MusicBand implements Comparable<MusicBand>, Serializable {
    @XmlAttribute
    private long id; // The value of the field must be greater than 0, The value of this field must be unique, The value of this field must be generated automatically
    @XmlElement(required = true)
    private String name; // The field cannot be null, The string cannot be empty
    @XmlElement(required = true)
    private Coordinates coordinates; // The field cannot be null
    @XmlElement(required = true)
    private java.util.Date creationDate; // The field cannot be null, The value of this field must be generated automatically
    @XmlElement(required = true)
    private int numberOfParticipants; // The field cannot be null, The value of the field must be greater than 0
    @XmlElement
    private Long albumsCount; // The field can be null, The value of the field must be greater than 0
    @XmlElement
    @XmlJavaTypeAdapter(DateAdapter.class)
    private java.time.ZonedDateTime establishmentDate; // The field can be null
    @XmlElement(required = true)
    private MusicGenre genre; // The field cannot be null
    @XmlElement(required = true)
    private Label label; // The field can be null (actually, it cannot, because of the Bands field)
    /**
     * Instantiates a new Music band.
     *
     * @param id                   the id
     * @param name                 the name
     * @param coordinates          the coordinates
     * @param creationDate         the creation date
     * @param numberOfParticipants the number of participants
     * @param albumsCount          the albums count
     * @param establishmenDate     the establishmen date
     * @param genre                the genre
     * @param label                the label
     */
    public MusicBand(long id, String name, Coordinates coordinates, java.util.Date creationDate,
            int numberOfParticipants, Long albumsCount,
            ZonedDateTime establishmenDate, MusicGenre genre, Label label) {
        this.id = id;
        this.name = name;
        this.coordinates = coordinates;
        this.creationDate = creationDate;
        this.numberOfParticipants = numberOfParticipants;
        this.albumsCount = albumsCount;
        this.establishmentDate = establishmenDate;
        this.genre = genre;
        this.label = label;
    }

    /**
     * Instantiates a new Music band.
     */
    public MusicBand() {
    }

    /**
     * Compare to int.
     *
     * @param oMusicBand the o music band
     * @return the int
     */
    @Override
    public int compareTo(MusicBand oMusicBand) {
        if (this.id > oMusicBand.id) {
            return 1;
        } else if (this.id == oMusicBand.id) {
            return 0;
        } else {
            return -1;
        }
    }

    /**
     * To string string.
     *
     * @return the string
     */
    @Override
    public String toString() {
        return "MusicBand's id: " + id + ", name: " + name + ", coordinates: " + coordinates
                + ", created: " + creationDate + ", number_of_participants: " + numberOfParticipants
                + ", albums_count: " + albumsCount + ", established: " + establishmentDate
                + ", genre: " + genre + ", label: " + label.getName() + " with " + label.getBands() + " bands";

    }

    /**
     * Gets albums count.
     *
     * @return the albums count
     */
    public Long getAlbumsCount() {
        return albumsCount;
    }

    /**
     * Gets coordinates.
     *
     * @return the coordinates
     */
    public Coordinates getCoordinates() {
        return coordinates;
    }

    /**
     * Gets creation date.
     *
     * @return the creation date
     */
    public java.util.Date getCreationDate() {
        return creationDate;
    }

    /**
     * Gets establishment date.
     *
     * @return the establishment date
     */
    public java.time.ZonedDateTime getEstablishmentDate() {
        return establishmentDate;
    }

    /**
     * Gets genre.
     *
     * @return the genre
     */
    public MusicGenre getGenre() {
        return genre;
    }

    /**
     * Gets id.
     *
     * @return the id
     */
    public long getId() {
        return id;
    }

    /**
     * Gets label.
     *
     * @return the label
     */
    public Label getLabel() {
        return label;
    }

    /**
     * Gets name.
     *
     * @return the name
     */
    public String getName() {
        return name;
    }

    /**
     * Gets number of participants.
     *
     * @return the number of participants
     */
    public int getNumberOfParticipants() {
        return numberOfParticipants;
    }

    /**
     * Sets name.
     *
     * @param name the name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Sets coordinates.
     *
     * @param coordinates the coordinates
     */
    public void setCoordinates(Coordinates coordinates) {
        this.coordinates = coordinates;
    }

    /**
     * Sets albums count.
     *
     * @param albumsCount the albums count
     */
    public void setAlbumsCount(Long albumsCount) {
        this.albumsCount = albumsCount;
    }

    /**
     * Sets establishment date.
     *
     * @param establishmentDate the establishment date
     */
    public void setEstablishmentDate(java.time.ZonedDateTime establishmentDate) {
        this.establishmentDate = establishmentDate;
    }

    /**
     * Sets genre.
     *
     * @param genre the genre
     */
    public void setGenre(MusicGenre genre) {
        this.genre = genre;
    }

    /**
     * Sets label.
     *
     * @param label the label
     */
    public void setLabel(Label label) {
        this.label = label;
    }

    /**
     * Sets number of participants.
     *
     * @param numberOfParticipants the number of participants
     */
    public void setNumberOfParticipants(int numberOfParticipants) {
        this.numberOfParticipants = numberOfParticipants;
    }

    /**
     * Sets id.
     *
     * @param id the id
     */
    public void setId(long id) {
        this.id = id;
    }

    /**
     * Sets creation date.
     *
     * @param creationDate the creation date
     */
    public void setCreationDate(java.util.Date creationDate) {
        this.creationDate = creationDate;
    }

}