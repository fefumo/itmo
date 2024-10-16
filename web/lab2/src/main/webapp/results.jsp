<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Result Page</title>
</head>
<body>

    <div class="table-container blurred_round_container">
        <table id="result-table">
            <thead>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th>Result</th>
                    <th>Current time</th>
                    <th>Elapsed time</th>
                </tr>
            </thead>
            <tbody id="result-body">
                   <jsp:include page="table.jsp"/>
            </tbody>
        </table>
    </div>

    <br>
    <form action="index.jsp" method="get">
        <input type="submit" value="Return back">
    </form>
</body>
</html>
