console.log('i am included');
const menu=document.querySelector('.btn-mobile-nav');
const header=document.querySelector('.header');



menu.addEventListener('click',function(){
   header.classList.toggle('nav-open');
})

