function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }

}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
// что бы можна было вызвать в других модулях

function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal

    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(item => {
        item.addEventListener('click', () => openModal(modalSelector, modalTimerId));
        // что бы обойти органичение связанное с вызовом функции (в обрабочике не можем вызыват ф-цию, а только объявлять)
        // openModal == () => openModal(modalSelector)
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape  " && modal.classList.contains('show')) {
            closeModal(modalSelector);
            // ... && modal.classList.contains('show') - следит, есть ли такой class
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    // window.pageYOffset - прокрученая часть
    // тоже самое что ScrollTop, только поддерживается и старыми браузерами

    window.addEventListener('scroll', showModalByScroll);



}

export default modal;
export { closeModal, openModal };