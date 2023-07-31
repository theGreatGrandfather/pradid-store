const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__bottom');
// const headerContacts = document.querySelector('.header__contacts');
const body = document.querySelector('body');
const backdrop = document.querySelector('.header__bottom__backdrop ');


const toggleMobileMenu = (e)=>{
    e.preventDefault();
    if (e.target === burger || e.target === burger.firstElementChild ) {
        burger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        // headerContacts.classList.toggle('active');
        body.classList.toggle('lock');
        backdrop.classList.toggle('is-hidden');
        backdrop.addEventListener('click', onBackdropClick);
    }
};


const onBackdropClick = (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    // headerContacts.classList.toggle('active');
    body.classList.toggle('lock');
    backdrop.classList.toggle('is-hidden');
    backdrop.removeEventListener('click', onBackdropClick);
}
burger.addEventListener('click', toggleMobileMenu);