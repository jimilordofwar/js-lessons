// here are a number of variables and datatype examples
// variables are declared with the var keyword
let myString = "Hello World";
let myFirstNumber = 1;
let myBoolean = true;
let myArray = [1, 2, 3, 4, 5];
let myObject = {
  name: "John",
  age: 30
};

// now we can use these variables wherever we want in our code!
// don't worry about what's happening for now, we'll get to it later
function showMe(option) {
  // find the HTML element where we will display the output
  let output = document.getElementById("output");

  // if the option is "string", then display the string
  if (option == "string") {
    console.log(myString);
    output.innerHTML = myString;
  }
  // if the option is "number", then display the number
  if (option == "number") {
    console.log(myFirstNumber);
    output.innerHTML = myFirstNumber;
  }
  // if the option is "boolean", then display the boolean 
  if (option == "boolean") {
    console.log(myBoolean);
    output.innerHTML = myBoolean;
  }
  // if the option is "array", then display the array
  if (option == "array") {
    console.log(myArray);
    output.innerHTML = myArray;
  }
  // if the option is "object", then display the object
  if (option == "object") {
    console.log(myObject);
    output.innerHTML = JSON.stringify(myObject);
  }
}