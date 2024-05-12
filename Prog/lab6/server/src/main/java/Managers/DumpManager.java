package Managers;

import java.io.BufferedWriter;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.StringWriter;

import Collection.CollectionObject.MusicBand;
import Collection.Validators.MusicBandValidator;
import Exceptions.CommandException;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Marshaller;
import jakarta.xml.bind.Unmarshaller;

/**
 * The `DumpManager` class in Java implements Singleton design pattern and
 * provides methods for saving
 * to and loading from files, converting Date objects to XMLGregorianCalendar,
 * and reading data from a
 * FileInputStream.
 */
public class DumpManager {

    private static DumpManager singletonPattern;
    private String pathToEnvVariable;

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
        IdManager idManager = IdManager.getInstance();
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
            idManager.saveIdSetToFile();
            String xmlString = stringWriter.toString();
            try (BufferedWriter writer = new BufferedWriter(new FileWriter(path))) {
                writer.write(xmlString);
            } catch (IOException e) {
                throw new CommandException("Something is wrong with the file that the program is saving to. Check it's access rights. ");
            }
        } catch (JAXBException e) {
            throw new CommandException("An error occured during marshalling.");
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
        setPathToEnvVariable(filePath);
        CollectionManager collectionManager = CollectionManager.getInstance();
        CollectionManager marshallingManager = null;
        IdManager idManager = IdManager.getInstance();
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
                if (marshallingManager.getCollection() == null){
                    System.out.println();
                    System.out.println("--------------------------");
                    System.out.println("Empty collection. Skipping unmarshalling...");
                    System.out.println();
                    return;
                }
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
                idManager.loadIdSetFromFile();                
                idManager.reloadIds(collectionManager.getCollection());
            } catch (JAXBException e) {
                System.out.println();
                System.out.println("--------------------------");
                System.out.println("An error occured during unmarshalling. Check the xml file and it's contents.");
                e.printStackTrace();
                System.exit(0);
            } catch(IOException e){
                System.out.println();
                System.out.println("--------------------------");
                System.out.println("Something is wrong with the file that the program is reading from. Check it's access rights.");
                System.exit(0);
            }
        } catch (FileNotFoundException e) {
            System.out.println();
            System.out.println("--------------------------");
            System.out.println("Something is wrong with the file that the program is reading from. Check it's access rights.");
            System.exit(0);
        }
    }
    public String getPathToEnvVariable() {
        return pathToEnvVariable;
    }
    public void setPathToEnvVariable(String pathToEnvVariable) {
        this.pathToEnvVariable = pathToEnvVariable;
    }
}
