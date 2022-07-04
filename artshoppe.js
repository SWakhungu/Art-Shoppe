//The user is able to get a message on mouseover on hovering the mouse cursor over the title//
function mOver(obj) {
  obj.innerHTML = "Enter! Explore! Purchase a memorable piece!";
}
function mOut(obj) {
  obj.innerHTML = "Welcome to The Art Shoppe!";
}

//This event allows the user to see a change on clicking the order button//
let change = () => {
  document.getElementById("press").style.backgroundColor = "red";
};

// Once user keys in their information on the form provided, an alert message confirming successful form submission appears. Also there is verification on validity of the email address provided; used an email verifier API//
const form = document.getElementById("myForm");
const input = document.getElementById("email");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Your form was submitted successfully. Thank you!");
  const verifyEmail = async () => {
    const email = input.value;
    const response = await fetch(`https://www.disify.com/api/email/${email}`);
    const data = await response.json();
    const { format } = data;
    if (format) {
      alert("This is a valid email address.");
    } else {
      alert("This is an invalid email address.");
    }
  };
  verifyEmail();
});
