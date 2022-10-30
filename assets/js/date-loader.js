const date = document.querySelector("#date");

window.addEventListener("pageshow", () => {
    let now = new Date();
    date.innerHTML += now.toDateString().substr(4).toUpperCase();
})