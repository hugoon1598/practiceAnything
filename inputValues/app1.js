const loginForm =document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")


function onSubmit(tomato) {
    tomato.preventDefault(tomato);
    console.log(tomato);
    };

loginForm.addEventListener("submit", onSubmit);

