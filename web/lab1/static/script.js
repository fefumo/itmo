document.getElementById("check-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission or page reload

    const xInput = document.getElementById("x-input").value.trim().replace(',','.');
    const ySelect = document.getElementById("y-select").value;
    const rSelect = document.getElementById("r-select").value;

    // Validate X on the client side
    if (!isValidX(xInput)) {
        alert("Invalid X value. It should be a number between -5 and 3.");
        return;
    }

    const x = parseFloat(xInput);
    const y = parseFloat(ySelect);
    const r = parseFloat(rSelect);

    // Prepare data for sending to the server
    const data = { x: x, y: y, r: r };

    // Send POST request to the server
    fetch("http://localhost:8080/fcgi-bin/app.jar", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },        
        body: JSON.stringify(data)
    })
    .then(resp => { 
        if(!resp.ok) { // Check if any error occurred
            console.log('something is wrong with the response...');
            return resp.text().then(text => { throw new Error(text) });
         }
        else {
            console.log('success');
            return resp.json(); // Convert to JSON 
        }    
    })
    .then(result => { // Handle the data from the response
        console.log('result is: ' + JSON.stringify(result, null, 2)); // Pretty-print the JSON result
        addResultToTable(x, y, r, result.response.hit, result.currentTime, result.elapsedTime);
    })
    .catch(error => {
        console.error("catch error:", error);
    });
});

function isValidX(value) {
    const regex = /^-?\d+(\.\d+)?$/;

    return regex.test(value) && Number(value) >= -5 && Number(value) <= 3;
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
