const mainForm = document.getElementById("check-btn");
/*
mainForm.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission or page reload

    const xInput = document.querySelector('input[name="x"]:checked').value.trim().replace(',', '.');
    const yInput = document.getElementById("y-input").value.trim().replace(',','.');
    const rInput = document.getElementById("r-input").value.trim().replace(',','.');

    if (!isValidY(yInput)) {
        alert("Invalid Y value. It should be a number between -3 and 5.");
        return;
    }

    if (!isValidR(rInput)) {
        alert("Invalid R value. It should be a number between 1 and 4.");
        return;
    }

    const x = parseFloat(xInput);
    const y = parseFloat(yInput);
    const r = parseFloat(rInput);
    const data = {
        "x": x,
        "y": y,
        "r": r
    }
    // Send POST request to the server
    send(data);
});
*/

function send(reqData){
    fetch("controller", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(reqData)
    })
        .then(resp => {
            if (!resp.ok) {
                console.log('something is wrong with the response...');
                return resp.text().then(text => {
                    console.error('Response text:', text); // Log the response text
                    throw new Error(text);
                });
            } else {
                console.log('success');
                console.log("Received response:", resp);
                return resp.text().then(text => {
                    console.log('Raw response:', text); // Log raw response before parsing
                return JSON.parse(text); // Manually parse JSON
                });
            }
        })
        
        .then(data => { // Handle the data from the response
            console.log('Received response data: ', JSON.stringify(data, null, 2));

            // Extract result and other fields
            const result = data.result; // The nested result object
            
            addResultToTable(result.x, result.y, result.r, result.isHit, result.currentTime, result.elapsedTime);

            const svgCoords = graphToSvgCoordinates(parseFloat(result.x), parseFloat(result.y), parseFloat(result.r));
            drawDot(svgCoords.x, svgCoords.y, result.isHit);
        })
        .catch(error => {
            console.log("caught error during processing results")
            console.error("catch error:", error);
        });
}


const svg = document.getElementById('graph');

svg.addEventListener('click', function(event) {
    // Get the bounding box of the SVG
    const rect = svg.getBoundingClientRect();

    // Get click coordinates relative to the SVG
    const svgX = event.clientX - rect.left; // Click position in SVG width
    const svgY = event.clientY - rect.top;  // Click position in SVG height

    // Get the value of R
    const rInput = document.getElementById("r-input").value.trim().replace(',', '.');
    const r = parseFloat(rInput);

    if (!rInput) {
        alert("Please enter r value");
        return;
    }
    if (!isValidR(rInput)) {
        alert("Invalid R value. It should be a number between 1 and 4.");
        return;
    }

    // Map SVG coordinates to graph coordinates [-R, R]
    const x = ((svgX - 200) / 170) * r; // Transform SVG X to graph X
    const y = ((200 - svgY) / 170) * r; // Transform SVG Y to graph Y and invert Y-axis

    const clickData = {
        'x': x,
        'y': y,
        'r': r,
        'clicked' : true
    };

    // Log the coordinates to the console
    console.log('Click coordinates:', clickData);
    send(clickData);
});

function graphToSvgCoordinates(x, y, r) {
    // Graph coordinates range from [-r, r] for both x and y, while SVG coordinates range from [0, 400]
    const svgWidth = svg.clientWidth;
    const svgHeight = svg.clientHeight;
    
    // Transform graph x to SVG x
    const svgX = 200 + (x / r) * 170; // Based on your graph setup, 170px corresponds to R
    
    // Transform graph y to SVG y (and invert y-axis)
    const svgY = 200 - (y / r) * 170;
    
    return { x: svgX, y: svgY };
}

function drawDot(svgX, svgY, isHit) {
    // Create a new circle element in the SVG
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    // Set the transformed SVG coordinates
    circle.setAttribute("cx", svgX); // SVG X coordinate
    circle.setAttribute("cy", svgY); // SVG Y coordinate
    circle.setAttribute("r", 3); // Circle radius
    circle.setAttribute("fill", isHit ? "green" : "red"); // Green if hit, red if miss

    // Append the circle to the SVG
    svg.appendChild(circle);
}


function isValidY(value) {
    const regex = /^-?\d+(\.\d+)?$/;

    return regex.test(value) && Number(value) >= -3 && Number(value) <= 5;
}

function isValidR(value) {
    const regex = /^-?\d+(\.\d+)?$/;

    return regex.test(value) && Number(value) >= 1 && Number(value) <= 4;
}

function addResultToTable(x, y, r, hit, currentTime, elapsedTime) {
    const resultBody = document.getElementById("result-body");
    const newRow = document.createElement("tr");

    const xCell = document.createElement("td");
    xCell.textContent = x;

    const yCell = document.createElement("td");
    yCell.textContent = y;

    const rCell = document.createElement("td");
    rCell.textContent = r;

    const resultCell = document.createElement("td");
    resultCell.textContent = hit ? "Hit" : "Miss";

    const currentTimeCell = document.createElement("td");
    currentTimeCell.textContent = currentTime;

    const elapsedTimeCell = document.createElement("td");
    elapsedTimeCell.textContent = elapsedTime + " ms";

    newRow.appendChild(xCell);
    newRow.appendChild(yCell);
    newRow.appendChild(rCell);
    newRow.appendChild(resultCell);
    newRow.appendChild(currentTimeCell);
    newRow.appendChild(elapsedTimeCell);

    resultBody.appendChild(newRow);
}
