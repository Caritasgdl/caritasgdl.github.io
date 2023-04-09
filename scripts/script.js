//característica oculta en index.html
function maullido() {
    var audio = document.getElementById("audio");
    audio.play();
    alert("¡Descubriste una función secreta, miau!, hay más en todas las páginas...🐱")
}

//Funcionalidad para el <select>
const select = document.getElementById('seleccion');
select.addEventListener('change', function() {
  const seleccionado = this.value;
  if (seleccionado !== '') {
    window.location.href = seleccionado;
  }
});

//característica oculta en pagina2.html
const escudo_juan = document.getElementById("e_escudo_juan");

escudo_juan.addEventListener("click", function() {
  alert("Este es su escudo de armas, ¿No te parece bonito?. Miau🐱");
});

const juan = document.getElementById("e_juan");
juan.addEventListener("click", function() {
  alert("Sólo en la Segunda Guerra Mundial, San Juan apoyó a 7 paises: 🇮🇹🇻🇦🇧🇬🇹🇷🇬🇷🇵🇱🇫🇷")
})