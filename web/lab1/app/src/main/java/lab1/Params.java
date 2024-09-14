package lab1;

import java.util.HashMap;

public class Params {
    public static HashMap<String, String> parse(String queryString) {
        HashMap<String, String> params = new HashMap<String, String>();

        for (String pair : queryString.split("&")) {
            String[] keyValue = pair.split("=");
            if (keyValue.length > 1) {
                params.put(keyValue[0], keyValue[1]);
            } else {
                params.put(keyValue[0], "");
            }
        }

        return params;
    }
}