import axios from 'axios';
import { backdrop, body, modal } from './call-back';
import { doModalClose } from '../contacts-modal';

const TOKEN = '6279094717:AAEINNI-WB8PTYW-nQglKgNdX6lALH6T6A0';
const CHAT_ID = '-1001887598395';
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

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
            modal.classList.toggle('active');
            body.classList.toggle('lock');
            backdrop.classList.toggle('is-hidden');
            modalForm.reset();
            doModalClose();


            // backdrop.removeEventListener('click', onBackdrop);
            // document.removeEventListener("keydown", onEscapeKeydowm);
            // callBackClose.removeEventListener('click', onCallBackClose);
            
            
                        

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
            console.log('messageToTg', messageToTg)
            axios.post(URI_API, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: messageToTg,
            }).then(resp => (console.log('resp', resp)))
            .catch(err =>(console.log('err', err)))
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