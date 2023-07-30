import onSubmitCallBackBtn from './onSubmitCallBackBtn';

const headerBtnCall = document.querySelector('.header__btn-call');
const body = document.querySelector('body');
export const backdrop = document.querySelector('#callBackdrop');
export const submitCallBackBtn = document.querySelector('.call-back__btn');
export const callBackClose = document.querySelector('.call-back__close');

const onHeaderBtnCall = (e) => {
    e.preventDefault();
    backdrop.classList.toggle('is-hidden');
    document.addEventListener("keydown", onEscapeKeydowm);
    callBackClose.addEventListener('click', onCallBackClose);
    submitCallBackBtn.addEventListener('click', onSubmitCallBackBtn);

}

headerBtnCall.addEventListener('click', onHeaderBtnCall)

export const onCallBackClose = (e) => {
    console.log('e', e);
    backdrop.classList.toggle('is-hidden');
    callBackClose.removeEventListener('click', onCallBackClose);
    document.removeEventListener("keydown", onEscapeKeydowm);
    submitCallBackBtn.removeEventListener('click', onSubmitCallBackBtn)

};

export const onEscapeKeydowm = (e) => {
    if (e.code === "Escape") {
        backdrop.classList.toggle('is-hidden');
        document.removeEventListener("keydown", onEscapeKeydowm);
        callBackClose.removeEventListener('click', onCallBackClose);
        submitCallBackBtn.removeEventListener('click', onSubmitCallBackBtn);

    }
};


