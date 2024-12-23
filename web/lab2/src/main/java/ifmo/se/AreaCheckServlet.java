package ifmo.se;

import com.google.gson.Gson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@WebServlet("/check")
public class AreaCheckServlet extends HttpServlet {
    public static final int SC_UNPROCESSABLE_ENTITY = 422;
    public static final int SC_INTERNAL_SERVER_ERROR = 500;

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        long startTime = System.currentTimeMillis(); // Track start time
        float x, y, r;

        try {
            x = getFloat(request, "x");
            y = getFloat(request, "y");
            r = getFloat(request, "r");
            String clickedParam = request.getParameter("clicked");
            boolean clicked = clickedParam != null && clickedParam.equals("true");

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

            long currentTime = System.currentTimeMillis();
            long elapsedTime = currentTime - startTime;
            String currentTimeStr = new SimpleDateFormat("HH:mm:ss.SSS").format(new Date(currentTime));

            ResultBean.Result result = new ResultBean.Result(String.valueOf(x),
                    String.valueOf(y), String.valueOf(r), CoordinatesValidator.isInArea(x, y, r), currentTimeStr, String.valueOf(elapsedTime));
            bean.addResult(result);

            System.out.println("the result is: " + result);

            if (clicked){
                Map<String, Object> responseMap = new HashMap<>();
                responseMap.put("result", result);
                String jsonResponse = new Gson().toJson(responseMap);

                // Respond with JSON
                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                response.getWriter().write(jsonResponse);// Write the response to the output
            }
            else{
                request.getRequestDispatcher("results.jsp").forward(request, response);
            }

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

    private static float getFloat(HttpServletRequest request, String parameter){
        String param = request.getParameter(parameter);
        return Float.parseFloat(param.replace(",", "."));
    }
}
