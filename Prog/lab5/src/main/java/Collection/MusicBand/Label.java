package Collection.MusicBand;

/**
 * Calss Label which serves as a part of MusicBand class
 *
 * @see MusicBand
 */
public class Label {
    private String name;
    private Long bands; // Поле не может быть null

    /**
     * Instantiates a new Label.
     *
     * @param name  the name
     * @param bands the bands
     */
    public Label(String name, Long bands) {
        this.name = name;
        this.bands = bands;
    }

    /**
     * Instantiates a new Label.
     */
    public Label() {
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
     * Sets name.
     *
     * @param name the name
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Gets bands.
     *
     * @return the bands
     */
    public Long getBands() {
        return bands;
    }

    /**
     * Sets bands.
     *
     * @param bands the bands
     */
    public void setBands(Long bands) {
        this.bands = bands;
    }

    /**
     * To string.
     *
     * @return the string
     */
    @Override
    public String toString() {
        return name;
    }
}
