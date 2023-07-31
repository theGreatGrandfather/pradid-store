import {
    headerBtnCall, onHeaderBtnCall, backdrop, modal,
    body, modalForm
} from './call-back/call-back';

const contactsBtn = document.querySelector('.header__btn-call');
const contactsModal = document.querySelector('.header__contacts-modal');
const contactsCloseBtn = document.querySelector('.contacts-modal__close');

 


const onContactsBtnClick = (e) => {
    console.log('eqwe', e);
    e.preventDefault();
    body.classList.toggle('lock');
    contactsModal.classList.add('active');
    backdrop.classList.toggle('is-hidden');
    headerBtnCall.addEventListener('click', onHeaderBtnCall);
    contactsCloseBtn.addEventListener('click', onModalClose);
    document.addEventListener("keydown", onEscapeKeydowm);
    backdrop.addEventListener('click', onBackdrop);
};

const onEscapeKeydowm = (e) => {
    console.log('e', e)
    if (e.code === "Escape") {
        doModalClose();
    }
};

const onBackdrop = (e) => {
    console.log('e', e)
    if (e.target === e.currentTarget) {
        doModalClose();
    }
};

const onModalClose = () => {
    doModalClose();
};

export const doModalClose = () => {
    headerBtnCall.removeEventListener('click', onHeaderBtnCall);
    body.classList.remove('lock');
    contactsModal.classList.remove('active');
    backdrop.classList.add('is-hidden');
    contactsCloseBtn.removeEventListener('click', onModalClose);
    document.removeEventListener("keydown", onEscapeKeydowm);
    backdrop.removeEventListener('click', onBackdrop);
    modal.classList.remove('active');
    modalForm.reset();

}

// export const removeContactsEventListeners = () => {
//     contactsCloseBtn.removeEventListener('click', onModalClose);
//     document.removeEventListener("keydown", onEscapeKeydowm);
//     backdrop.removeEventListener('click', onBackdrop);

// }
contactsBtn.addEventListener('click', onContactsBtnClick)