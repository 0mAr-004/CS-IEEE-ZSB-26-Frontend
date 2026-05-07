///1
window.onload = function () {
    let elements = document.querySelectorAll(".open");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains("open") &&elements[i].textContent.trim() === "Elzero") {
            window.open(elements[i].href, "_blank");
        }
    }
};

//2
    let div = document.querySelector(".our-element");
    let p = document.querySelector("p");

    p.remove();

    let startDiv = document.createElement("div");
    startDiv.className = "start";
    startDiv.title = "Start Element";
    startDiv.setAttribute("data-value", "Start");
    startDiv.textContent = "Start";

    let endDiv = document.createElement("div");
    endDiv.className = "end";
    endDiv.title = "End Element";
    endDiv.setAttribute("data-value", "End");
    endDiv.textContent = "End";

    div.before(startDiv);
    div.after(endDiv);
