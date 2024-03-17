const acordeon = document.getElementsByClassName('acordeon__contenido');
for (i=0; i<acordeon.length; i++) {
  acordeon[i].addEventListener('click', function () {
    this.classList.toggle('activa')
  })
}