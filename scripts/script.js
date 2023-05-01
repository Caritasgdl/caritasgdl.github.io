//Funcionalidad para el <select>
const select = document.getElementById('seleccion');
select.addEventListener('change', function() {
  const seleccionado = this.value;
  if (seleccionado !== '') {
    window.location.href = seleccionado;
  }
});

const juan = document.getElementById("e_juan");
juan.addEventListener("click", function() {
  alert("Sólo en la Segunda Guerra Mundial, San Juan apoyó a 7 paises: 🇮🇹🇻🇦🇧🇬🇹🇷🇬🇷🇵🇱🇫🇷")
})