function modalConsultation() {
    const directorBtn = document.querySelector('.director-btn'),
        input = document.querySelectorAll('input'),
        popupConsultation = document.querySelector('.popup-consultation');
    input.forEach(item => {
        if (item.name === 'user_quest') {
            item.addEventListener('input', event => {
                const question = event.target.value;
                return question;
            });
        }
    });
    directorBtn.addEventListener('click', event => {
        event.preventDefault();
        popupConsultation.style.display = 'block';

    });
    popupConsultation.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupConsultation.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupConsultation.style.display = 'none';
            }
        }
    });
}
export default modalConsultation;
