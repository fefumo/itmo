package ifmo.se;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        //kind of logging
        System.out.println("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nin doPost ");
        System.out.println("\n params:\n x: " + request.getParameter("x") + "\n y: " + request.getParameter("y")
        + "\n r: " + request.getParameter("r"));

        if (request.getParameter("x") != null && request.getParameter("y") != null && request.getParameter("r") != null) {
            System.out.println("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nin if ");
            request.getRequestDispatcher("./check").forward(request, response);
        } else {
            System.out.println("\nxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\nin else ");
            request.getRequestDispatcher("./index.jsp").forward(request, response);
        }

    }

    public static double getDouble(HttpServletRequest request, String parameter) {
        String param = request.getParameter(parameter);
        return Double.parseDouble(param.replace(",", "."));
    }
    public static float getFloat(HttpServletRequest request, String parameter){
        String param = request.getParameter(parameter);
        return Float.parseFloat(param.replace(",", "."));
    }
}
