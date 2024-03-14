package ru.itmo.prog.lab5.CLI.Commands;

import java.io.File;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Marshaller;
import ru.itmo.prog.lab5.CLI.Managers.CollectionManager;

public class Save extends Command{

    public Save(String name, String descr) {
        super(name, descr);
    }

    @Override
    public void execute(String[] args) {
        if (args.length != 1) throw new ArrayIndexOutOfBoundsException("There has to be 1 argument (type: long)");
        CollectionManager collectionManager = CollectionManager.getInstance();

        try {
            JAXBContext context = JAXBContext.newInstance(CollectionManager.class);            
            Marshaller marshaller = context.createMarshaller();

            marshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
            marshaller.marshal(collectionManager, new File("out.xml"));
        } catch (JAXBException e) {
            e.printStackTrace();
        }
        
    }
    
}
