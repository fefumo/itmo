package ru.itmo.prog.lab5.collection.MusicBand;

import java.time.ZonedDateTime;

import io.github.threetenjaxb.core.ZonedDateTimeXmlAdapter;
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
public class MusicBand implements Comparable<MusicBand> {
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
    @XmlJavaTypeAdapter(ZonedDateTimeXmlAdapter.class)
    private java.time.ZonedDateTime establishmentDate; // The field can be null
    @XmlElement(required = true)
    private MusicGenre genre; // The field cannot be null
    @XmlElement(required = true)
    private Label label; // The field can be null (actually, it cannot, because of the Bands field)


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

    public MusicBand() {
    }

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

    @Override
    public String toString() {
        return "MusicBand's id: " + id + ", name: " + name + ", coordinates: " + coordinates
                + ", created: " + creationDate + ", number_of_participants: " + numberOfParticipants
                + ", albums_count: " + albumsCount + ", established: " + establishmentDate
                + ", genre: " + genre + ", label: " + label + " with " + label.getBands() + " bands";

    }

    public Long getAlbumsCount() {
        return albumsCount;
    }

    public Coordinates getCoordinates() {
        return coordinates;
    }

    public java.util.Date getCreationDate() {
        return creationDate;
    }

    public java.time.ZonedDateTime getEstablishmentDate() {
        return establishmentDate;
    }

    public MusicGenre getGenre() {
        return genre;
    }

    public long getId() {
        return id;
    }

    public Label getLabel() {
        return label;
    }

    public String getName() {
        return name;
    }

    public int getNumberOfParticipants() {
        return numberOfParticipants;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCoordinates(Coordinates coordinates) {
        this.coordinates = coordinates;
    }

    public void setAlbumsCount(Long albumsCount) {
        this.albumsCount = albumsCount;
    }

    public void setEstablishmentDate(java.time.ZonedDateTime establishmentDate) {
        this.establishmentDate = establishmentDate;
    }

    public void setGenre(MusicGenre genre) {
        this.genre = genre;
    }

    public void setLabel(Label label) {
        this.label = label;
    }

    public void setNumberOfParticipants(int numberOfParticipants) {
        this.numberOfParticipants = numberOfParticipants;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setCreationDate(java.util.Date creationDate) {
        this.creationDate = creationDate;
    }

}