const h1 = document.querySelector("div.hello h1:first-child");

const superEventHandler = {
    handleMouseEnter: function() {
        h1.innerText = "mouse is here!";
        h1.style.color = "red";
    },

    handleMouseLeave: function () {
        h1.innerText = "mouse is gone!";
        h1.style.color = "orange";
    },

    handleContextMenu: function () {
        h1.innerText = "That was a right click!";
        h1.style.color = "green";
    },

    handleWindowResize: function () {
        h1.innerText = "You just resize.";
        h1.style.color = "purple";
    },
};

h1.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
h1.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("contextmenu", superEventHandler.handleContextMenu);
window.addEventListener("resize", superEventHandler.handleWindowResize);