function modalWindowOne() {
    const callBtn = document.querySelectorAll('.call-btn'),
        popupCall = document.querySelector('.popup-call');
    callBtn.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            popupCall.style.display = 'block';
        });
    });
    popupCall.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupCall.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupCall.style.display = 'none';
            }
        }
    });
}


export default modalWindowOne;
