package ru.itmo.prog.lab5.CLI.Managers;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.datatype.XMLGregorianCalendar;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Marshaller;
import jakarta.xml.bind.Unmarshaller;
import ru.itmo.prog.lab5.collection.MusicBand.MusicBand;
import ru.itmo.prog.lab5.collection.Validators.MusicBandValidator;

/**
 * The `DumpManager` class in Java implements Singleton design pattern and
 * provides methods for saving
 * to and loading from files, converting Date objects to XMLGregorianCalendar,
 * and reading data from a
 * FileInputStream.
 */
public class DumpManager {

    private static DumpManager singletonPattern;

    /**
     * The `getInstance()` method in the `DumpManager` class is implementing
     * theSingleton designpattern. It ensures that only one instance of the
     * `DumpManager` class iscreated and provides aglobal point of access to that
     * instance.
     * 
     * @return singleton instance of DumpManager
     */
    public static DumpManager getInstance() {
        if (singletonPattern == null) {
            singletonPattern = new DumpManager();
        }
        return singletonPattern;
    }

    /**
     * Method that saves current collection to a file provided in signature by
     * marshalling it to XML.
     */
    public void saveToXmlFile(String path) {
        CollectionManager collectionManager = CollectionManager.getInstance();
        try {
            JAXBContext context = JAXBContext.newInstance(CollectionManager.class);
            Marshaller marshaller = context.createMarshaller();

            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);

            StringWriter stringWriter = new StringWriter();
            /*
             * easier version is to marshal(collectionManager, new File(path))
             * but I was asked to use bufferedWriter. so here it is...
             */
            marshaller.marshal(collectionManager, stringWriter);
            String xmlString = stringWriter.toString();
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(path))) {
                writer.write(xmlString);
            } catch (IOException e) {
                System.out.println();
                System.out.println("--------------------------");
                System.out.println("Something is wrong with the file that the program is saving to. Check it's access rights.");
                return;
            }
            System.out.println();
            System.out.println("--------------------------");
            System.out.println("Collection has been saved");
        } catch (JAXBException e) {
            System.out.println();
            System.out.println("--------------------------");
            System.out.println("An error occured during marshalling.");
        }
    }

    /**
     * method `unmarshalCollectionFromXml` unmarshales xml file and makes a new
     * instance of collection manager so that user can use it in the future;
     * 
     * @param filePath path to the file with xml data
     * @return new instance of collection manager with a new collection or null if
     *         no data in file is present.
     */
    public void unmarshalAndSetCollectionFromXML(String filePath) {
        CollectionManager collectionManager = CollectionManager.getInstance();
        CollectionManager marshallingManager = null;
        MusicBandValidator musicBandValidator = new MusicBandValidator();
        try {
            FileInputStream fileInputStream = new FileInputStream(filePath);
            // i have to use InputStreamReader so here it is...
            try (Reader reader = new InputStreamReader(fileInputStream)) {
                // DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
                // DocumentBuilder builder = factory.newDocumentBuilder();
                // Document document = builder.parse(fileInputStream);
                // Element rootElement = document.getDocumentElement();
                // NodeList musicBandNodeList = rootElement.getElementsByTagName("muiscBands");

                JAXBContext jaxbContext = JAXBContext.newInstance(CollectionManager.class);
                Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();

                marshallingManager = (CollectionManager) jaxbUnmarshaller.unmarshal(reader);
                //validating elements
                for(MusicBand element : marshallingManager.getCollection()){
                    if (musicBandValidator.validate(element) == false){
                        System.out.println();
                        System.out.println("--------------------------");
                        System.out.println("Wrong values in xml. Fix the file and try Again.");
                        System.exit(1);
                    }
                }
                collectionManager.setCollection(marshallingManager.getCollection());
                // add id's to previousIds array
                collectionManager.reloadIdArray();

            } catch (JAXBException e) {
                System.out.println();
                System.out.println("--------------------------");
                System.out.println("An error occured during unmarshalling. Check the xml file and it's contents.");
            } catch(IOException e){
                System.out.println();
                System.out.println("--------------------------");
                System.out.println("Something is wrong with the file that the program is reading from. Check it's access rights.");
            }
        } catch (FileNotFoundException e) {
            System.out.println();
            System.out.println("--------------------------");
            System.out.println("Something is wrong with the file that the program is reading from. Check it's access rights.");
            System.exit(0);
        }
    }

    /**
     * The function converts a Date object to an XMLGregorianCalendar object using a
     * specific date
     * format.
     * 
     * @param d The parameter `d` in the `getDate` method is of type `Date`. It
     *          represents a specific
     *          point in time, including both date and time information.
     * @return An XMLGregorianCalendar object is being returned.
     */
    public static final XMLGregorianCalendar getDate(Date d) {
        try {
            return DatatypeFactory.newInstance().newXMLGregorianCalendar(new SimpleDateFormat("yyyy-MM-dd").format(d));
        } catch (DatatypeConfigurationException e) {
            return null;
        }
    }
}
