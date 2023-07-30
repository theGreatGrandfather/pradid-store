import { backdrop, onEscapeKeydowm, onCallBackClose, callBackClose, submitCallBackBtn } from './call-back';

const onSubmitCallBackBtn = () => {
    const modalForm = document.querySelector('.call-back__form');
    modalForm.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(modalForm);
        let formData = new FormData(modalForm);

        // formData.forEach((x, y) => {
        //     console.log(x);
        //     console.log(y);
        // });

        if (error === 0) {
            backdrop.classList.toggle('is-hidden');
            document.removeEventListener("keydown", onEscapeKeydowm);
            callBackClose.removeEventListener('click', onCallBackClose);
            submitCallBackBtn.removeEventListener('click', onSubmitCallBackBtn);
            modalForm.reset();

            let messageToTg = `<b>Заповлено зворотній дзвінок Pradid</b>\n`;
            function sendMessage() {
                for (let entry of formData.entries()) {
                    if (entry[1] != '') {
                        messageToTg += ` ${entry.join(" : ")}\n`;
                    }
                }
                return messageToTg;
            };
            sendMessage();
            // axios.post(URI_API, {
            //     chat_id: CHAT_ID,
            //     parse_mode: 'html',
            //     text: messageToTg,
            // });
        }
    };

    function formValidate(modalForm) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');
        
        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_tel')) {
                if (telTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
        }
        return error;
    };

    function formAddError(input) {
        input.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.classList.remove('_error');
        input.classList.remove('_error');
    }

    function telTest(input) {
        return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value);
    }
};

export default onSubmitCallBackBtn;