//The user is able to get a message on mouseover on hovering the mouse cursor over the title//
function mOver(obj) {
    obj.innerHTML = "Enter! Explore! Purchase a memorable piece!"
}
function mOut(obj) {
    obj.innerHTML = "Welcome to The Art Shoppe!"
}

//This event allows the user to see a change on clicking the order button//
let change = () =>{
    document.getElementById("press").style.backgroundColor = "red";
};

// Once user keys in their information on the form provided, an alert message confirming successful form submission appears//
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault()
    alert("Your form was submitted successfully. Thank you!")
})


// FGXG08UiNMMEoq3tqK5EhiXWTeqrepdd