function mOver(obj) {
    obj.innerHTML = "Enter! Explore! Purchase a memorable piece!"
}
function mOut(obj) {
    obj.innerHTML = "Welcome to The Art Shoppe!"
}

let change = () =>{
    document.getElementById("press").style.backgroundColor = "blue";
};


document.getElementById("myForm").onsubmit = function() {myFunction()};
function myFunction() {
        alert("Your form was submitted successfully. Thank you!")
}
