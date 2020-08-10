const colorList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
const main = document.querySelector('main')
btn.addEventListener('click', function () {
    let rondom = '#';
    for (let i = 0; i < 6; i++) {
        rondom += colorList[rondomNumber()]
    }
    main.style.backgroundColor = rondom;
    color.textContent = rondom;
})

function rondomNumber() {
    return Math.floor(Math.random() * colorList.length);

}