import java.io.IOException;

import DBRelated.JdbcProvider;

public class Main {
    private final static String host = "127.0.0.1";
    private final static int port = 2804;
    private final static JdbcProvider jdbcProvider = new JdbcProvider();

    public static void main(String[] args) throws IOException {

        Server server = new Server(host, port, jdbcProvider);
        server.run();
    }
}
