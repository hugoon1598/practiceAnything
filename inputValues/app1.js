const loginForm =document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY="username";

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username=loginInput.value;
    localStorage.setItem("USERNAME_KEY", username)
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText=`Hello! ${username} This is the testing`;
    console.log(username);
    };

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    
}

loginForm.addEventListener("submit", onSubmit);

const savedUsername = localStorage.getItem("USERNAME_KEY");

console.log(savedUsername);

if(savedUsername === null) {
    //show the form
} else{
    //show the greetings
}