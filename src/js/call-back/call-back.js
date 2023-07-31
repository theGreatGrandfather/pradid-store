import onSubmitCallBackBtn from './onSubmitCallBackBtn';

export const headerBtnCall = document.querySelector('.contacts-modal-btn');
export const body = document.querySelector('body');
export const modal = document.querySelector('.modal');
export const backdrop = document.querySelector('.backdrop');
export const submitCallBackBtn = document.querySelector('.call-back__btn');
export const callBackClose = document.querySelector('.call-back__close');
export const modalForm = document.querySelector('.call-back__form');

export const onHeaderBtnCall = (e) => {
    e.preventDefault();
    modal.classList.add('active');
    callBackClose.addEventListener('click', onCallBackClose)
    onSubmitCallBackBtn();
}

const onCallBackClose = (e) => {
    console.log('onCallBackClose', e)
    modal.classList.remove('active');
    callBackClose.removeEventListener('click', onCallBackClose)
    modalForm.reset();
};