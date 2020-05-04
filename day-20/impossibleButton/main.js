const btn = document.querySelector('#btn');
const reset = document.querySelector('#reset');

document.addEventListener('load', ()=>{
    btn.classList.add('start');
    
    
})
reset.addEventListener('click', ()=>{
    btn.classList.remove('win');
    btn.innerText = 'ClickMe'
})


btn.addEventListener('mouseover',() => {
    console.log('mousedove')
    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random()* window.innerWidth);
    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
});

btn.addEventListener('click', () => {
    btn.innerText = 'You Got Me';
    btn.classList.add('win')

})