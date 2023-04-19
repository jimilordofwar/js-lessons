// here we will look at forms and how to use them to get data from the user
// first we will need to get the form elements from the HTML
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let output = document.getElementById("output");

// now we can use the form elements to get the data from the user
// we will use the .value property to get the data
function submitForm(event) {
  event.preventDefault();
  let name = "My name is "+firstName.value + " " + lastName.value;
  output.innerHTML = name;
}