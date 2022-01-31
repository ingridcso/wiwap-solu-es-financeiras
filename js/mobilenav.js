
function toglleMenu (event){
  if (event.type == 'touchstart') event.preventDefault;
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active =nav.classList.constains('active')
  event.currentTarget.setAttribute('aria-expanded', 'true'); 
  if (active) { event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
} else {
  if(active) event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
btnMobile.addEventListener('click', toglleMenu);
btnMobile.addEventListener('touchstart', toglleMenu);

const links = document.querySelectorAll ('.link a');

function ativarLink (link){
  const url = location.href;
  const href = link.href;

  if(url.includes(href)){
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);
