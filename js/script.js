
/* EXIBE UM LOADING SIMPLES ATÉ CARREGAR Á PAGINA */
const loaded = document.querySelector('.loader')

window.addEventListener('load', () => {
    if(document.readyState === 'complete'){
            loaded.style.display = 'none'
    }
})

/* MUDANÇA DE BACKGROUND NAVBAR */
/* Quando o usuário rolar para baixo 10px da parte superior do documento, deslize a barra de navegação para baixo */
window.addEventListener('scroll', function(){
    var navbar = document.querySelector('nav');

    if(this.scrollY - 70 > 10){
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }
    
});

/* BOTÃO PARA ROLAR O SCROLL SENTIO DO TOPO DA PAGINA */
window.addEventListener('scroll', function(){
    var backToTop = document.querySelector('.buttom-to-top');

    if(this.scrollY - 70 > 10){
        backToTop.classList.add('sticky')
    }else{
        backToTop.classList.remove('sticky');
    }
    
});


/* ATIVANDO/DESATIVANDO MENU MOBILE */
const menuMobile = document.querySelector('.menu-mobile');
const navbar = document.querySelector('.navbar');
const navItens = document.querySelectorAll('.navbar a');


menuMobile.addEventListener('click', () => {
    navbar.classList.toggle('active');
})

/* FECHA MENU MOBILE AO CLICAR NO LINK/MENU */
navItens.forEach((navIten) => {
    navIten.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
