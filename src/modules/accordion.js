function accordion() {
    const panel = document.querySelectorAll('.panel');
    panel.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            panel.forEach(item => {
                item.children[1].classList.remove('in');
            });
            item.children[1].classList.add('in');
        });
    });
}
export default accordion;
