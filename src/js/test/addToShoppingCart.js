const onCartButtonClick = (e) => {
    if (e.target.hasAttribute('data-card')) {
        const card = e.target.closest('.book__item');
        const poductInfo = {
            id: card.dataset.id,
            img: card.querySelector('.book__img').getAttribute('src'),
            title: card.querySelector('.book-title').innerText,
            price: card.querySelector('.book__price').querySelector('.book__price__value').innerText,
        } 
        console.log('poductInfo', poductInfo)
    }
} 

window.addEventListener('click', onCartButtonClick);