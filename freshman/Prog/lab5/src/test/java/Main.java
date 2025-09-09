import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Создание списка строк
        List<String> strings = new ArrayList<>();
        strings.add("Hello");
        strings.add("World");

        // Создание списка объектов типа Object
        List<Object> objects = new ArrayList<>();
        objects.add(10);
        objects.add(3.14);
        objects.add(true);

        // Метод, принимающий список объектов и выводящий их
        printList(objects);

        // Метод, принимающий список строк и выводящий их
        printList(strings);
    }

    // Метод, принимающий список любых объектов и выводящий их
    public static void printList(List<?> list) {
        for (Object obj : list) {
            System.out.println(obj);
        }
    }
}
