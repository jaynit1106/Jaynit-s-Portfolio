$(document).ready(function(){

let drawer=document.querySelector('.drawer');
let times=document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav');


drawer.addEventListener('click',function(){
	mobileNav.classList.add('open');
});

times.addEventListener('click',function(){
	mobileNav.classList.remove('open');
});


});