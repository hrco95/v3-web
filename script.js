const gumb = document.getElementById("gumb");
const pozdrav = document.getElementById("pozdrav");

gumb.addEventListener("click", function () {
    pozdrav.textContent = "Pozdrav svijetu!";
});
