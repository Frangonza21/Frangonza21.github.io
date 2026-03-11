const inputColor = document.getElementById("colorFondo");

inputColor.addEventListener("input", (event) => {
    const color = event.target.value;
    document.body.style.backgroundColor = color;
});
