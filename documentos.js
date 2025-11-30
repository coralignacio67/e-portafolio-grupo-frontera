function abrirDocumento(link) {
    document.getElementById("modal-pdf").style.display = "flex";
    document.getElementById("visor-pdf").src = link;
}

function cerrarModal() {
    document.getElementById("modal-pdf").style.display = "none";
    document.getElementById("visor-pdf").src = "";
}

document.addEventListener("click", function(event) {
    const modal = document.getElementById("modal-pdf");
    const contenido = document.querySelector(".modal-contenido");

    if (event.target === modal) {
        cerrarModal();
    }
});
