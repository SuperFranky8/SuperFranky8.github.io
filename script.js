'use strict'


let socialButtonHider = document.querySelector('#footer-container');
let btnHider = document.querySelector('#button')



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




















