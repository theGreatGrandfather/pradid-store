import { getBooksList } from './api';

export const createMurkup = async () => {
    try {
        const response =  await getBooksList();
        console.log('response', response.data)
        if (response.data.length !== 0) {
            return response.data.map(({ title, price, book_image, _id }) => `
            <li class='book__item _list' data-id='${_id}'>
                <img class="book__img" src="${book_image}" alt="${title}">
                <h3 class='book-title'>${title}</h3>
                <p class='book__price'>Вартість: <span class="book__price__value" > ${Math.round(Math.random() * (100 - 1) + 1)} </span>   грн</p>
                <button type='button' class='book__btn' data-card>В кошик</button>
            </li>`).join('')
        }
    } catch (error) {
        
    }
}