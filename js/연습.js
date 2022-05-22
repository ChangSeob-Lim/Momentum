const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // const clickedClass = "clicked";
    // if (h1.className === clickedClass) {
    //     h1.className = "";
    // } else {
    //     h1.className = clickedClass;
    // }
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }
    // if classList contain value -> remove, not contain value -> add
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);