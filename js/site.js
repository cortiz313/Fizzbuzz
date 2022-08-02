// Get the string from the page
// Controller function
function getValues(){

    // get the user values from the page
    let fizzValue = document.getElementById("fizz").value;
    let buzzValue = document.getElementById("buzz").value;

    // parse to turn the strings into integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // check that the numbers are integers
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue))
    {
        // generate an array of numbers from 1 to 100
        let numbers = generateNumbers();

        // write and display data to the screen
        displayString(fizzValue, buzzValue, numbers);
    }
    else
    {
        // if not integers, alert the user
        alert("You must enter integers for the fizz and buzz values.");
    }

}

// Gather the numbers in an array
// Logic Function
function generateNumbers(){

    let numbers = [];

    // create an array of numbers from 1 to 100
    for (let i = 0; i <= 100; i++) {
        // this will execute in a loop until index = 100
        numbers.push(i);
    }
    return numbers;

}

// Display fizz buzz results to user
// View/Logic Function
function displayString(fizzValue, buzzValue, numbers){

    // get the table body element from the page
    let tableBody = document.getElementById("results");

    // get the template itself
    let fbTemplateRow = document.getElementById("fbTemplate");

    // add all the rows to the table

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
}