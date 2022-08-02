// Get the string from the page
// Controller function
function getValues() {

    // get the user values from the page
    let fizzValue = document.getElementById("fizz").value;
    let buzzValue = document.getElementById("buzz").value;

    // parse to turn the strings into integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        // call fizzbuzz
        let fbArray = fizzBuzzC(fizzValue, buzzValue);
        // write and display data to the screen
        displayData(fbArray);
    } else {
        // if not integers, alert the user
        alert("You must enter integers for the fizz and buzz values.");
    }

}

// Perform the fizzbuzz operation
// Logic Function
function fizzBuzz(fizzValue, buzzValue) {

    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        // check if i is divisible by both fizz and buzz values first
        if (i % fizzValue == 0 && i % buzzValue == 0)
            returnArray.push("fizzbuzz");

        // if not, check if its divisble by the fizz value
        else if (i % fizzValue == 0)
            returnArray.push("fizz");

        // if not, check if its divisible by the buzz value
        else if (i % buzzValue == 0)
            returnArray.push("buzz");

        // if not, push the numerical value to the array
        else returnArray.push(i);
    }

    return returnArray;

}

// A different algorithm for fizzbuzz using booleans and switch case
function fizzBuzzB(fizzValue, buzzValue) {
    let returnArray = [];
    let fizz = false;
    let buzz = false;

    for (let i = 1; i < 100; i++) {
        fizz = i % fizzValue == 0;
        buzz = i % buzzValue == 0;

        // cases based on the fizz and buzz values
        switch (true) {
            case fizz && buzz: {
                returnArray.push("fizzbuzz");
                break;
            }
            case fizz: {
                returnArray.push("fizz");
                break;
            }
            case buzz: {
                returnArray.push("buzz");
                break;
            }
            default:{
                returnArray.push(i);
                break;
            }
        }
    }
    return returnArray;
}

// A third algorithm for fizzbuzz using ternary operators and the truthiness of empty strings
function fizzBuzzC(fizzValue, buzzValue)
{
    let returnArray = [];

    for(let i = 1; i <= 100; i++)
    {
        // ternary operators to concatenate fizz or empty string and buzz or empty string. 2 empty strings will evaluate to false, and in that case value = i;
        let value = ((i % fizzValue == 0 ? "fizz" : "") + (i % buzzValue == 0 ? "buzz" : "") || i );
        returnArray.push(value);
    }

    return returnArray;
}

// Display fizz buzz results to user
// View/Logic Function
function displayData(fbArray) {

    // get the table body element from the page
    let tableBody = document.getElementById("results");

    // get the template itself
    let fbTemplateRow = document.getElementById("fbTemplate");

    // clear table first
    tableBody.innerHTML = "";

    let number;
    let tableRow;

    for (let i = 0; i < fbArray.length; i++) {

        tableRow = document.importNode(fbTemplateRow.content, true);

        // grab the number of tds in the template
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbArray[i]);
        rowCols[0].textContent = fbArray[i];

        tableBody.appendChild(tableRow);
    }


    /* 2ND WAY YOU COULD DO IT
    NEED AN ARRAY 'numbers' WITH ALL NUMBER 1-100 FOR THIS METHOD
    let className = "";
    let templateRows = "";
    let number;
    for (let i = 1; i < numbers.length; i++)
    {
        number = numbers[i];
        if(number % fizzValue == 0 && number % buzzValue == 0)
        {
            className = "fizzbuzz";
            templateRows += `<tr><td class="${className}">${"fizz buzz"}</td></tr>`;
            
        }
        else if (number % fizzValue == 0)
        {
            className = "fizz";
            templateRows += `<tr><td class="${className}">${"fizz"}</td></tr>`;
            
        }
        else if (number % buzzValue == 0)
        {
            className = "buzz";
            templateRows += `<tr><td class="${className}">${"buzz"}</td></tr>`;
            
        }
        else{
            templateRows += `<tr><td>${number}</td></tr>`;
        }
        className="";

        
    }
    // Write to the page
   document.getElementById("results").innerHTML = templateRows;
   */
}