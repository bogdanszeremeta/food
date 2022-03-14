import { getResource } from '../services/services';

function cards() {
    // Используем классы для карточек

    class NewCard {
        constructor(src, alt, subtitle, descr, price, parent, ...classes) {
            this.src = src;
            this.alt = alt;
            this.subtitle = subtitle;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.mainDiv = document.querySelector(parent);
            this.transfer = 27;

        }

        changeToUAH() {
            this.price = this.transfer * this.price;
        }

        render() {
            this.changeToUAH();
            const div = document.createElement('div');
            if (this.classes.length === 0) {
                this.div = 'menu__item';
                div.classList.add(this.div);
            }

            this.classes.forEach(className => div.classList.add(className));
            div.innerHTML = `
    
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.subtitle}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
    
            `;
            this.mainDiv.append(div);
        }
    }
    // const card = new NewCard(...);
    // card.render();

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({ img, altimg: alt, title, descr, price }) => {
                new NewCard(img, alt, title, descr, price, '.menu .container').render();
            });
        });
    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({ img, altimg, title, descr, price }) => {
    //         const div = document.createElement('div');

    //         div.classList.add('.menu__item');

    //         div.innerHTML = `
    //         <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;

    //         document.querySelector('.menu .container').append(div);
    //     });
    // }


    // new NewCard(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     8,
    //     '.menu .container',
    //     // 'menu__item',
    //     // 'big'
    // ).render();

    // new NewCard(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     'Меню “Премиум”',
    //     'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    //     20,
    //     '.menu .container',
    //     // 'menu__item'
    // ).render();

    // new NewCard(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    //     6,
    //     '.menu .container',
    //     // 'menu__item'
    // ).render();
}

export default cards;