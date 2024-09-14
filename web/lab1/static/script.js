document.getElementById("check-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission or page reload

    const xInput = document.getElementById("x-input").value.trim();
    const ySelect = document.getElementById("y-select").value;
    const rSelect = document.getElementById("r-select").value;

    // Validate X on the client side (should be between -5 and 3)
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
    fetch("/validate-point", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(resp => { 
        if(!resp.ok) { //check if any error occured
          return resp.text().then(text => { throw new Error(text) }) //for readability
         }
        else {
            console.log('success');
            return resp.json(); //convert to json 
        }    
    })
    .then(result => { // and now we can ctually use the data from the response
        addResultToTable(x, y, r, result.hit);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

function isValidX(value) {
    const x = parseFloat(value);
    return !isNaN(x) && x >= -5 && x <= 3;
}

function addResultToTable(x, y, r, result) {
    const resultBody = document.getElementById("result-body");
    const newRow = document.createElement("tr");

    const xCell = document.createElement("td");
    xCell.textContent = x;

    const yCell = document.createElement("td");
    yCell.textContent = y;

    const rCell = document.createElement("td");
    rCell.textContent = r;

    const resultCell = document.createElement("td");
    resultCell.textContent = result ? "Hit" : "Miss";

    newRow.appendChild(xCell);
    newRow.appendChild(yCell);
    newRow.appendChild(rCell);
    newRow.appendChild(resultCell);

    resultBody.appendChild(newRow);
}
