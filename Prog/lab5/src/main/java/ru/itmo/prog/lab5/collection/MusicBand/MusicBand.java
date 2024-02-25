package ru.itmo.prog.lab5.collection.MusicBand;

import java.time.ZonedDateTime;


public class MusicBand implements  Comparable<MusicBand> {
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

    @Override
    public int compareTo(MusicBand oMusicBand){
        return this.numberOfParticipants - oMusicBand.numberOfParticipants;
    }
    @Override
    public String toString(){
        return "MusicBand's id: " + id + ", name: " + name + ", coordinates: " + coordinates
         + ", created: " + creationDate + ", number_of_participants: " + numberOfParticipants
         + ", albums_count: " + albumsCount + ", established: " + establishmentDate
         + ", genre: " + genre + ", label: " + label + " with " + label.getBands() + "bands";

    }

    
    //"Name cannot be null nor can it be blank"
    //"Number of participants has to be more than 0"
    //"Albums count has to be more than 0 AND not null"


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

}