/* Função para ativar o popup na página principal*/

//Função
function activePopUp() {
  const active = document.getElementById("active");
  const unactive = document.getElementById("unactive");
  const container = document.getElementById("new_container");

  active.addEventListener("click", () => {
    container.classList.add("active");
  });

  unactive.addEventListener("click", () => {
    container.classList.remove("active");
  });
}

//Bloco principal
activePopUp();
