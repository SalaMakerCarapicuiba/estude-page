// Exibe o botão quando o usuário rola para baixo
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var mybutton = document.getElementById("goToTopBtn");
  if (
    document.body.scrollTop > 480 ||
    document.documentElement.scrollTop > 480
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Rola para o topo quando o botão é clicado
function goToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
