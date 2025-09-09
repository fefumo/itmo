package CLI.Managers;

import java.time.ZonedDateTime;

import jakarta.xml.bind.annotation.adapters.XmlAdapter;

/**
 * The `DateAdapter` class helps to marshal and unmarshal ZonedDateTime field of the collection
 */
public class DateAdapter extends XmlAdapter<String, ZonedDateTime> {

    //private final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    /**
     * The function marshals a Date object into a formatted String using a
     * synchronized block to ensure
     * thread safety.
     * 
     * @param v The parameter `v` in the `marshal` method is of type `Date`, which
     *          represents a
     *          specific instant in time with millisecond precision.
     * @return The method is returning a formatted string representation of the Date
     *         object `v`.
     */
    @Override
    public String marshal(ZonedDateTime v) throws Exception {
        // synchronized (dateFormat) {
        //     return dateFormat.format(v);
        // }
        return v.toString();
    }

    /**
     * The function unmarshals a string into a Date object using a synchronized
     * block to ensure thread
     * safety when parsing the date.
     * 
     * @param v The parameter `v` in the `unmarshal` method represents the string
     *          value that needs to
     *          be converted into a `Date` object. The method uses a
     *          `SimpleDateFormat` object (`dateFormat`) to
     *          parse the string and convert it into a `Date` object.
     * @return A Date object is being returned.
     */
    @Override
    public ZonedDateTime unmarshal(String v) throws Exception {
        // synchronized (dateFormat) {
        //     return dateFormat.parse(v);
        // }
        return ZonedDateTime.parse(v);
    }
}
