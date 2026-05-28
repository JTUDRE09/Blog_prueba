function mostrarpost(id) {
    document.querySelector(".container").classList.add("hidden");
    document.querySelectorAll(".post-completo").forEach(sec => sec.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function volver() {
    document.querySelector(".container").classList.remove("hidden");
    document.querySelectorAll(".post-completo").forEach(sec => sec.style.display = "none");
}