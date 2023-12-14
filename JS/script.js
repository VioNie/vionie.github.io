
var nouvelleCouleur = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Définit la fonction à exécuter lors du clic sur le bouton
  function swapColor() {
    document.getElementById("btn").style.backgroundColor = nouvelleCouleur; }