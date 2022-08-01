// Get the string from the page
// Controller function
function getValues(){

    let fizzValue = document.getElementById("fizz").value;
    let buzzValue = document.getElementById("buzz").value;
    let numbers = generateNumbers();
    displayString(fizzValue, buzzValue, numbers);
}

// Gather the numbers
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
// View Function
function displayString(fizzValue, buzzValue, numbers){

    let className = "";
    let templateRows = "";
    let number;
    for (let i = 1; i < numbers.length; i++)
    {
        number = numbers[i];
        if(number % fizzValue == 0 && number % buzzValue == 0)
        {
            templateRows += `<tr><td>${"fizz buzz"}</td></tr>`;
            className = "fizz buzz";
        }
        else if (number % fizzValue == 0)
        {
            templateRows += `<tr><td>${"fizz"}</td></tr>`;
            className = "fizz";
        }
        else if (number % buzzValue == 0)
        {
            templateRows += `<tr><td>${"buzz"}</td></tr>`;
            className = "buzz";
        }
        else{
            templateRows += `<tr><td>${number}</td></tr>`;
        }

        
    }
    // Write to the page
   document.getElementById("results").innerHTML = templateRows;
}