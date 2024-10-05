<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta name="viewport" content="initial-scale=1.0">
        <meta http-equiv="Content-Type" content="text/html" charset="UTF-8">
        <link rel="stylesheet" href="static/styles.css">
        <title>web2</title>
    </head>


    <body>

        <header class="header blurred_round_container">
            <h1>Molchanov Fyodor Denisovich</h1>
            <h1>group: P3213</h1>
            <h1>variant №12333</h1>
        </header>

        <div class="svg_and_coords">
            <div class="graph">
                <svg xmlns="http://www.w3.org/2000/svg" width="400px" height="400px" id="graph">
                            <line x1="0" y1="200" x2="400" y2="200" stroke="#000720"></line>
                            <line x1="200" y1="0" x2="200" y2="400" stroke="#000720"></line>

                            <!-- Ticks and labels for Y-axis -->
                            <!-- R -->
                            <line x1="195" y1="30" x2="205" y2="30" stroke="black" stroke-width="2"></line>
                            <text x="210" y="35" font-size="12" fill="black">R</text>
                            <!-- R/2 -->
                            <line x1="195" y1="115" x2="205" y2="115" stroke="black" stroke-width="2"></line>
                            <text x="210" y="120" font-size="12" fill="black">R/2</text>
                            <!-- -R/2 -->
                            <line x1="195" y1="285" x2="205" y2="285" stroke="black" stroke-width="2"></line>
                            <text x="210" y="290" font-size="12" fill="black">-R/2</text>
                            <!-- -R -->
                            <line x1="195" y1="370" x2="205" y2="370" stroke="black" stroke-width="2"></line>
                            <text x="210" y="375" font-size="12" fill="black">-R</text>

                            <!-- Ticks and labels for X-axis -->
                            <!-- -R -->
                            <line x1="30" y1="195" x2="30" y2="205" stroke="black" stroke-width="2"></line>
                            <text x="20" y="190" font-size="12" fill="black">-R</text>
                            <!-- -R/2 -->
                            <line x1="115" y1="195" x2="115" y2="205" stroke="black" stroke-width="2"></line>
                            <text x="105" y="190" font-size="12" fill="black">-R/2</text>
                            <!-- R/2 -->
                            <line x1="285" y1="195" x2="285" y2="205" stroke="black" stroke-width="2"></line>
                            <text x="275" y="190" font-size="12" fill="black">R/2</text>
                            <!-- R -->
                            <line x1="370" y1="195" x2="370" y2="205" stroke="black" stroke-width="2"></line>
                            <text x="360" y="190" font-size="12" fill="black">R</text>

                            <polygon points="200,200 30,200 200,30" fill-opacity="0.4" stroke="navy" fill="blue"></polygon>
                            <rect x="200" y="115" width="170" height="85" fill-opacity="0.4" stroke="navy" fill="blue"></rect>
                            <path d="M 200 200 L 200 285 C 200 285 115 290 115 200 Z" fill-opacity="0.4" stroke="navy" fill="blue"></path>
                        </svg>
            </div>

            <div id="coordinates" class="blurred_round_container">
                <p>Enter parameters:</p>

                <div id="x-container" >
                    <legend>Select X:</legend>
                    <input type="radio" id="-2x" name="x" value="-2" />
                    <label for="-2x">-2</label>
                    <input type="radio" id="-1.5x" name="x" value="-1.5" />
                    <label for="-1.5x">-1.5</label>
                    <input type="radio" id="-1x" name="x" value="-1" />
                    <label for="-1x">-1</label>
                    <input type="radio" id="-0.5x" name="x" value="-0.5" />
                    <label for="-0.5x">-0.5</label>
                    <input type="radio" id="0x" name="x" value="0" />
                    <label for="0x">0</label>
                    <input type="radio" id="0.5x" name="x" value="0.5" />
                    <label for="0.5x">0.5</label>
                    <input type="radio" id="1x" name="x" value="1" />
                    <label for="1x">1</label>
                    <input type="radio" id="1.5x" name="x" value="1.5" />
                    <label for="1.5x">1.5</label>
                    <input type="radio" id="2x" name="x" value="2" />
                    <label for="2x">2</label>
                </div>

                <div id="y-container">
                    <label for="y-input">Select Y:</label>
                    <input type="text" id="y-input" name="y-input" maxlength="10" />
                </div>

                <div id="r-container">
                    <label for="r-input">Select R:</label>
                    <input type="text" id="r-input" name="y-input" maxlength="10" />
                </div>

                <button id="check-btn">Check</button>

            </div>

        </div>

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

        <script src="static/script.js"></script>
    </body>


    <footer class="footer blurred_round_container">
        <p>Copyright © Fefumo, 2024. Licensed under <a href="LICENSE">NoOnePaidMeForIt</a>. Plagiarism is <b>absolutely fine</b>.</p>
    </footer>

</html>
