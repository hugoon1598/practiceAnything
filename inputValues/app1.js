const loginForm =document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")

function onSubmit(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username=loginInput.value;
    console.log(username);
    greeting.innerText=`Hello! ${username}`;
    };

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    
}

loginForm.addEventListener("submit", onSubmit);
