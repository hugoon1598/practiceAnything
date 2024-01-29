const loginForm =document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

const link = document.querySelector("a")

function onSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
    };

function onClick(){
    alert("click!")
}

loginForm.addEventListener("submit", onSubmit);
link.addEventListener("click", onClick);
