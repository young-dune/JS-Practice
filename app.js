const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //중요한 정보를 담은게 아니라서 대문자로 작성함.

function onLoginSubmit(info){ 
    info.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("user", username);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit",onLoginSubmit);
