function modalWindowTwo() {
    const popupDiscount = document.querySelector('.popup-discount'),
        discountBtn = document.querySelectorAll('.discount-btn');
    discountBtn.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            popupDiscount.style.display = 'block';
        });
    });
    popupDiscount.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupDiscount.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupDiscount.style.display = 'none';
            }
        }
    });

}

export default modalWindowTwo;
