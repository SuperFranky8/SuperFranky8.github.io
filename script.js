'use strict'

// let block = document.querySelector('.block');

// console.log (block.style.width); берет только как атрибут



// получить все когда либо заданные для блока css свойства
// console.log(window.getComputedStyle(block).width);


// метрика JS предпочтительней использовать эти именно для JS

// размер без учета границ
// console.log(block.clientHeight);
// console.log(block.clientWidth);

// //ширина с учетом границ
// console.log(block.offsetWidth);


// console.log('отступ от внешней границы:' + block.clientTop);

// console.log('внутренняя высота: '+block.clientHeight);
// console.log('внутренняя ширина: '+block.clientWidth);
// console.log('внешняя высота: '+block.offsetHeight);
// console.log('внешняя ширина: '+block.offsetWidth);
// console.log('отступ от внешних границ вверх: '+block.clientTop);
// console.log('отступ от внешних границ слева: '+block.clientLeft);
// console.log('отступ от верхнего края до страницы: '+block.offsetTop);
// console.log('отступ левого края до страницы: '+block.offsetLeft);


// console.log('заниемая высота контентом: '+block.scrollHeight);



// socialButtonHider.addEventListener('scroll',()=>{
//   console.log('сколько проскролено сверху: '+socialButtonHider.scrollTop);
//   console.log('сколько проскролено слева: '+socialButtonHider.scrollLeft);
// })




// window.addEventListener('scroll',()=>{
//     if (document.documentElement.scrollTop <= block.offsetTop + block.clientHeight && document.documentElement.scrollTop + document.documentElement.clientHeight >= block.offsetTop) {
//       document.body.style.backgroundColor = 'red';
//     }
    
//     else {document.body.style.backgroundColor = 'green'}

// })
let socialButtonHider = document.querySelector('#footer-container');
let btnHider = document.querySelector('#button')

// socialButtonHider.addEventListener('scroll', ()=>{

// })

// socialButtonHider.addEventListener('scroll',()=>{
//   console.log('сколько проскролено сверху: '+socialButtonHider.scrollTop);
//   console.log('сколько проскролено слева: '+socialButtonHider.scrollLeft);
// })

socialButtonHider.addEventListener('mouseenter',()=>{
  if(socialButtonHider){ 
  btnHider.style.opacity = 0.1;
}})

btnHider.addEventListener('mouseenter',()=>{
  if(socialButtonHider){ 
  btnHider.style.opacity = 1;}
})
btnHider.addEventListener('mouseleave',()=>{
  if(socialButtonHider){ 
  btnHider.style.opacity = 0.5;}
})

socialButtonHider.addEventListener('mouseleave',()=>{
  if(socialButtonHider){ 
  btnHider.style.opacity = 0.5;}
})


// let button = document.querySelector('#button');

// button.addEventListener('click', ()=>{
//   document.documentElement.scrollTop = block.offsetTop
// })

















