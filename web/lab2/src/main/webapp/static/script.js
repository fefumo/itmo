const mainForm = document.getElementById("check-btn");
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


function send(data){
    fetch("controller", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(data)
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
            const currentTime = data.currentTime;
            const elapsedTime = data.elapsedTime;

            // Pass the values to the function
            addResultToTable(result.x, result.y, result.r, result.isHit, result.currentTime, result.elapsedTime);
        })
        .catch(error => {
            console.log("caught error during processing results")
            console.error("catch error:", error);
        });
}

const svg = document.getElementById('graph');

// Event listener for click on the SVG
svg.addEventListener('click', function(event) {
    // Get the bounding box of the SVG
    const rect = svg.getBoundingClientRect();

    // Get click coordinates relative to the SVG
    const svgX = event.clientX - rect.left; // Click position in SVG width
    const svgY = event.clientY - rect.top;  // Click position in SVG height

    // SVG dimensions
    const svgWidth = svg.clientWidth;
    const svgHeight = svg.clientHeight;

    // Transform SVG coordinates to graph coordinates
    const x = -1 + (svgX / svgWidth) * 2; // Map to [-1, 1]
    const y = 1 - (svgY / svgHeight) * 2; // Map to [-1, 1] and invert Y-axis

    const rInput = document.getElementById("r-input").value.trim().replace(',','.');
    const r = parseFloat(rInput);

    if (!rInput){
        alert("Please enter r value");
        return;
    }
    if (!isValidR(rInput)) {
        alert("Invalid R value. It should be a number between 1 and 4.");
        return;
    }

    // Create the JSON object with the coordinates
    const clickData = {
        'x': x,
        'y': y,
        'r': r
    };

    // Log the coordinates to the console
    console.log('Click coordinates:', clickData);

    // Send the data to the server
    send(clickData);
});

/*
document.querySelectorAll('input[type="radio"][name="x"]').forEach(radio => {
    radio.addEventListener('click', function() {
        if (this.checked) {
            // Store the current radio's state
            this.wasChecked = !this.wasChecked;
        }

        // If it was already checked, uncheck it
        if (this.wasChecked) {
            this.checked = false;
        }

        // Reset all other radios' wasChecked property
        document.querySelectorAll('input[type="radio"][name="x"]').forEach(otherRadio => {
            if (otherRadio !== this) {
                otherRadio.wasChecked = false;
            }
        });
    });
});
*/
/*
function setCanvasDPI() {
    let dpi = window.devicePixelRatio;
    let canvasElement = document.getElementById('graphCanvas');
    let style = {
        height() {
            return +getComputedStyle(canvasElement).getPropertyValue('height').slice(0, -2);
        },
        width() {
            return +getComputedStyle(canvasElement).getPropertyValue('width').slice(0, -2);
        }
    };

    canvasElement.setAttribute('width', style.width() * dpi);
    canvasElement.setAttribute('height', style.height() * dpi);
}
*/

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
