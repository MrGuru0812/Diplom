const accordionTwo = () => {
    const pan = document.querySelectorAll('.pan'),
        collapseTwo = document.getElementById('collapseTwo-two'),
        collapseThree = document.getElementById('collapseThree-two');
    collapseTwo.classList.remove('in');
    collapseThree.classList.remove('in');
    pan.forEach(item => {
        item.addEventListener('click', () => {
            pan.forEach(item => {
                item.children[1].classList.remove('in');
            });
            item.children[1].classList.add('in');
        });
    });

};


export default accordionTwo;

