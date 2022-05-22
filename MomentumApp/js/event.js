// const h1 = document.getElementById("h1");

// h1.innerText = "Got you!";

// console.log(h1.id);
// console.log(h1.className);

// const h1 = document.getElementsByTagName("h1");

// 아래 두개는 동일한 함수
// 기본은 태그, .은 클래스, #은 id
// const h1 = document.querySelector("#hello");
// const h1 = document.getElementsById("hello");

// const h1 = document.querySelector(".hello h1");

// const h1 = document.querySelectorAll(".hello h1");

// const h1 = document.querySelector(".hello h1:first-child");

//document.getElementsByClassName("hello")
// console.log(h1);

// h1.style.color = "blue";

const h1 = document.querySelector("div.hello h1:first-child");

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no wifi!");
}

function handleWindowOnline() {
    alert("All good!");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handleMouseLeave;

console.dir(h1);