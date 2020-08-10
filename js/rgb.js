const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
const main = document.querySelector('main')

btn.addEventListener('click', ()=>{
    let num = 'rgb('
    for(let i = 0; i <3; i++){
        num += rondomNumber() + ' ,';

    }
    
    
    newNum = num.slice(0, -1);
    newNum = newNum += ')' ;

    
    main.style.backgroundColor = newNum;
    color.textContent = newNum;
})

function rondomNumber(){
    return Math.floor(Math.random()*255);
}