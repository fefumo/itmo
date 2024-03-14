package ru.itmo.prog.lab5.collection.MusicBand;

import java.time.ZonedDateTime;

import io.github.threetenjaxb.core.ZonedDateTimeXmlAdapter;
import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlType;
import jakarta.xml.bind.annotation.adapters.XmlJavaTypeAdapter;
import ru.itmo.prog.lab5.CLI.Managers.DateAdapter;


@XmlType(propOrder = {"id","name","coordinates", "numberOfParticipants", "creationDate", "albumsCount", "establishmentDate", "genre", "label"})
public class MusicBand implements Comparable<MusicBand> {
    private long id; //Значение поля должно быть больше 0, Значение этого поля должно быть уникальным, Значение этого поля должно генерироваться автоматически
    private String name; //Поле не может быть null, Строка не может быть пустой
    private Coordinates coordinates; //Поле не может быть null
    private java.util.Date creationDate; //Поле не может быть null, Значение этого поля должно генерироваться автоматически
    private int numberOfParticipants; //Значение поля должно быть больше 0
    private Long albumsCount; //Поле может быть null, Значение поля должно быть больше 0
    private java.time.ZonedDateTime establishmentDate; //Поле может быть null
    private MusicGenre genre; //Поле не может быть null
    private Label label; //Поле может быть null

    public MusicBand(long id, String name, Coordinates coordinates, java.util.Date creationDate,
    int numberOfParticipants, Long albumsCount, 
    ZonedDateTime establishmenDate, MusicGenre genre, Label label){
        this.id = id;
        this.name = name;
        this.coordinates = coordinates;
        this.creationDate =creationDate;
        this.numberOfParticipants = numberOfParticipants;
        this.albumsCount = albumsCount;
        this.establishmentDate = establishmenDate;
        this.genre = genre;
        this.label = label;
    }

    public MusicBand() {
    }


    @Override
    public int compareTo(MusicBand oMusicBand){
        if (this.id > oMusicBand.id){
            return 1;
        }
        else if(this.id == oMusicBand.id){
            return 0;
        }
        else{
            return -1;
        }
    }
    
    @Override
    public String toString(){
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
    @XmlJavaTypeAdapter(DateAdapter.class)
    public java.util.Date getCreationDate() {
        return creationDate;
    }
    @XmlJavaTypeAdapter(ZonedDateTimeXmlAdapter.class)
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