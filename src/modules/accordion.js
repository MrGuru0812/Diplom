const accordionTwo = () => {
    const pan = document.querySelectorAll('.pan');
    pan.forEach(item => {
        item.addEventListener('click', e => {
            pan.forEach(item => {
                item.children[1].classList.remove('in');
            });
            item.children[1].classList.add('in');
        });
    });

};


export default accordionTwo;

