const loginForm =document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASS = "hidden";

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username=loginInput.value;
    localStorage.setItem("username", username)
    greeting.classList.remove(HIDDEN_CLASS);
    greeting.innerText=`Hello! ${username} This is the testing`;
    console.log(username);
    };

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    
}

loginForm.addEventListener("submit", onSubmit);
