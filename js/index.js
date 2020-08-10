const colorList= ['red', 'yellow', 'blue', 'green', 'black', 'cadetblue', 'white', 'gray']
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');
const main = document.querySelector('main')
btn.addEventListener('click',function (){
    let rondom = rondomNumber()
    main.style.backgroundColor= colorList[rondom];
    color.textContent = colorList[rondom];
    console.log(rondom)
})

function rondomNumber(){
   return Math.floor(Math.random()*colorList.length);
   
}