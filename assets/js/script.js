const botaoMenu = document.querySelector('.botao-menu');
const menuMobile = document.querySelector('#menu-mobile');

if (botaoMenu && menuMobile) {
  botaoMenu.addEventListener('click', () => {
    const aberto = menuMobile.classList.toggle('aberto');
    botaoMenu.setAttribute('aria-expanded', String(aberto));
  });

  menuMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuMobile.classList.remove('aberto');
      botaoMenu.setAttribute('aria-expanded', 'false');
    });
  });
}
