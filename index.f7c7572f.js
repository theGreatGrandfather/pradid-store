window.addEventListener("click",(e=>{if(e.target.hasAttribute("data-card")){const t=e.target.closest(".book__item"),o={id:t.dataset.id,img:t.querySelector(".book__img").getAttribute("src"),title:t.querySelector(".book-title").innerText,price:t.querySelector(".book__price").querySelector(".book__price__value").innerText};console.log("poductInfo",o)}}));
//# sourceMappingURL=index.f7c7572f.js.map
