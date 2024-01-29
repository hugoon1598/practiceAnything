const loginForm =document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

const link = document.querySelector("a")

function onSubmit(event) {
    event.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add("hidden")
    console.log(username);
    };

function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
    
}

loginForm.addEventListener("submit", onSubmit);
link.addEventListener("click", handleLinkClick);
