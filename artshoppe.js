function mOver(obj) {
    obj.innerHTML = "Enter! Explore! Purchase a memorable piece!"
}
function mOut(obj) {
    obj.innerHTML = "Welcome to The Art Shoppe!"
}

let change = () =>{
    document.getElementById("press").style.backgroundColor = "blue";
};

function submit(event) {
    log.textContent = `Form successfully submitted! Time stamp: ${event.timeStamp}`
    event.preventDefault();
}
const form = document.getElementById("myForm");
const log = document.getElementById("log")
form.addEventListener("submit", logSubmit);
// document.getElementById("myForm").onsubmit = function() {myFunction()};
// function myFunction() {
//         alert("Your form was submitted successfully. Thank you!")
// }
