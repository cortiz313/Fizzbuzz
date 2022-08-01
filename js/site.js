// Get the string from the page
// Controller function
function getValues(){

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
}

// Reverse the string
// Logic Function
function reverseString(userString){

    let revString = "";

    // reverse a string using a for loop
    for(let i = userString.length -1; i >= 0; i--)
        revString += userString[i];
    return revString;

}

// Display the reversed string to the user
// View Function
function displayString(revString){

    // Write to the page
    document.getElementById("msg").innerHTML = `Your reversed string is: ${revString} `;

    // Show the alert box
    document.getElementById("alert").classList.remove("invisible");
}