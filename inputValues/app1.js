const loginForm =document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY="username";

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem("USERNAME_KEY", username)
    paintGreetings(username);
    console.log(username);
    };

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    
}

function paintGreetings(username){
    greeting.innerText=`Hello! ${username} This is the testing`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem("USERNAME_KEY");

console.log(savedUsername);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmit);
} else{
    paintGreetings(savedUsername);
}