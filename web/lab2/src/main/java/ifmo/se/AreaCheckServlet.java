package ifmo.se;

import com.google.gson.Gson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.Duration;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.Map;
import java.time.format.DateTimeFormatter;

@WebServlet("/check")
public class AreaCheckServlet extends HttpServlet {
    public static final int SC_UNPROCESSABLE_ENTITY = 422;
    public static final int SC_INTERNAL_SERVER_ERROR = 500;
    Instant startTime = Instant.now(); // Use Instant for accurate time measurement

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Instant startTime = Instant.now();
        float x, y, r;

        try {
            x = ControllerServlet.getFloat(request, "x");
            y = ControllerServlet.getFloat(request, "y");
            r = ControllerServlet.getFloat(request, "r");

            CoordinatesValidator validator = new CoordinatesValidator(x, y, r);

            if (!validator.checkData()) {
                System.out.println("Invalid data");
                sendError(response, SC_UNPROCESSABLE_ENTITY, "Data is invalid");
                return;
            }

            System.out.println("valid data, generating response...");

            ResultBean bean = (ResultBean) request.getSession().getAttribute("results");
            if (bean == null) {
                bean = new ResultBean();
                request.getSession().setAttribute("results", bean);
            }

            long elapsedTime = Duration.between(startTime, Instant.now()).toMillis();

            Instant now = Instant.now();
            LocalDateTime currentTime = LocalDateTime.ofInstant(now, ZoneId.systemDefault());
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy:MM:dd:HH:mm:ss");
            String curTime = currentTime.format(formatter);

            ResultBean.Result result = new ResultBean.Result(String.valueOf(x),
                    String.valueOf(y), String.valueOf(r), CoordinatesValidator.isInArea(x, y, r), curTime, String.valueOf(elapsedTime));
            bean.addResult(result);


            //System.out.println("the result is: " + result + ", elapsedTime: " + elapsedTime +"ms , currentTime: " + curTime);

            System.out.println("the result is: " + result);

            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("result", result);
            //responseMap.put("currentTime", curTime);
            //responseMap.put("elapsedTime", elapsedTime);

            String jsonResponse = new Gson().toJson(responseMap);

            // Respond with JSON
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(jsonResponse);// Write the response to the output

        } catch (NumberFormatException e) {
            sendError(response, SC_UNPROCESSABLE_ENTITY, "Invalid number format");
        } catch (Exception e) {
            e.printStackTrace();
            sendError(response, SC_INTERNAL_SERVER_ERROR, "Internal Server Error");
        }
    }

    public static void sendError(HttpServletResponse response, int statusCode, String errorMessage) throws IOException {
        var json = new Gson();
        Map<String, Object> jsonResponse = new HashMap<>() {{
            put("error", errorMessage);
            put("status", "Error");
        }};

        response.setContentType("application/json");
        response.getWriter().write(json.toJson(jsonResponse));
        response.setStatus(statusCode);
    }
}