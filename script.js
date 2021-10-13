let x = document.getElementById('contain');

function openMenu() {
  let nav = document.getElementById('nav');
  nav.classList.toggle('open');

  x.classList.toggle('change');
}

x.addEventListener('click', openMenu);
