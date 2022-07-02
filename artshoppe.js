let change = () =>{
    document.getElementById("press").style.backgroundColor = "blue";
};


document.getElementById("myForm").onsubmit = function() {myFunction()};
function myFunction() {
        alert("Your form was submitted successfully. Thank you!")
}
