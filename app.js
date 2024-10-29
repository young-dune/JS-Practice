const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(info){ 
    info.preventDefault(); 
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem("username", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("username");

if(savedUsername === null){

}else{

}


loginForm.addEventListener("submit",onLoginSubmit);
