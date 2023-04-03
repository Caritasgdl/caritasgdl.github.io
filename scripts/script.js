function maullido() {
    var audio = document.getElementById("audio");
    audio.play();
    alert("¡Descubriste una función secreta, miau!, hay más en todas las páginas...🐱")
}

const select = document.getElementById('seleccion');
select.addEventListener('change', function() {
  const seleccionado = this.value;
  if (seleccionado !== '') {
    window.location.href = seleccionado;
  }
});
