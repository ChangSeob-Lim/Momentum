const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginBtnClick() {
    const userName = loginInput.value;
    // if (userName === "") {
    //     alert("Please write your name");
    // } else if (userName.length > 50) {
    //     alert("Your name is too long.");
    // }
    console.log(userName);
}

function onLoginSubmit(event) { // 기본적으로 이벤트를 호출할때 첫 번째 Agument로 evnet에 대한 정보를 줌
    event.preventDefault(); // 브라우저의 기본 동작을 막아주는 함수 submit의 경우 새로고침
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const inputUserName = loginInput.value;
    // console.log(userName);
    localStorage.setItem(USERNAME_KEY, inputUserName);
    paintGreetings(inputUserName);
    // paintGreetings();
}

function paintGreetings(userName) {
    // greeting.innerText = "Hello " + userName;
    greeting.innerText = `Hello ${userName}`; // '' "" `` 차이를 분명히 하기!
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function paintGreetings() {
//     const userName = localStorage.getItem(USERNAME_KEY);
//     greeting.innerText = `Hello ${userName}`; // '' "" `` 차이를 분명히 하기!
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// function handleLinkClick(evnet) {
//     event.preventDefault();
//     console.dir(evnet);
// }

// loginButton.addEventLkistener("click", onLoginBtnClick);
// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUserName);
    // paintGreetings();
}