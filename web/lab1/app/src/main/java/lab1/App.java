package lab1;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.logging.Logger;

import com.fastcgi.FCGIInterface;

public class App {
    private static final String RESPONSE_TEMPLATE = "Content-Type: application/json\n" +
                                                    "Content-Length: %d\n\n%s";
    
    private static final Logger log = Logger.getLogger(App.class.getName());

    public static void main (String args[]) { 
        log.info("in main func");
        while(new FCGIInterface().FCGIaccept() >= 0) {
            log.info("in while loop");
            try {
                log.info("prasing request...");
                HashMap<String, String> params = Params.parse(FCGIInterface.request.params.getProperty("QUERY_STRING"));
                int x = Integer.parseInt(params.get("x"));
                float y = Float.parseFloat(params.get("y"));
                float r = Float.parseFloat(params.get("r"));
                log.info("parsed x y r");

                if (validateX(x) && validateY(y) && validateR(r)) {
                    log. info("valid x y r, sending...");
                    sendJson(String.format("{\"result\": %b}", GeometryChecker.hit(x, y, r)));
                    log.info("result sent");
                } else {
                    log.info("invalid x y r, sending err");
                    sendJson("{\"error\": \"invalid data\"}");
                    log.info("err sent");
                }
            } catch (NumberFormatException e) {
                sendJson("{\"error\": \"wrong query param type\"}");
            } catch (NullPointerException e) {
                sendJson(String.format("{\"error\": \"missed necessary query param\"}"));
            } catch (Exception e) {
                sendJson(String.format("{\"error\": %s}", e.toString()));
            }
        }
    }

    private static void sendJson(String jsonDump) {
        System.out.println(String.format(RESPONSE_TEMPLATE, jsonDump.getBytes(StandardCharsets.UTF_8).length, jsonDump));
    }

    private static boolean validateX(int x) {
        return x >= -5 && x <= 3;
    }

    private static boolean validateY(float y) {
        return y >= -5 && y <= 3;
    }

    private static boolean validateR(float r) {
        return r >= 1 && r <= 3 && r % 0.5 == 0;
    }
}
