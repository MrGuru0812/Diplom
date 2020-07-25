function moduleAddSentence() {
    const addSentenceBtn = document.querySelector('.add-sentence-btn'),
        sentence = document.querySelector('.sentence'),
        row = document.querySelectorAll('.row')[4];
    console.dir(row);
    addSentenceBtn.addEventListener('click', () => {

        const arr = [];
        for (const i in row.children)
            arr[i] = row.children[i];
        arr.forEach(item => {
            if (item.classList.contains('hidden') || item.classList.contains('visible-sm-block')) {
                item.classList.remove('hidden');
                item.classList.remove('visible-sm-block');
            }
            addSentenceBtn.classList.add('hidden');
        });
    });
}
export default moduleAddSentence;
