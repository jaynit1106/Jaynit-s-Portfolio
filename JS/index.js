$(document).ready(function(){

let drawer=document.querySelector('.drawer');
let times=document.querySelector('.times');
let mobileNav=document.querySelector('.mobile-nav');

// var x=window.matchMedia("(max-width: 480px)");
// function mobile(x){
// 	if(x.matches){
// 		let right=document.querySelector('.right');
// 		console.log(right.classList);
// 		right.classList.remove('right');
// 		console.log(right.classList);
// 	}
// }
// mobile(x);
// x.addListener(mobile);






drawer.addEventListener('click',function(){
	mobileNav.classList.add('open');
});

times.addEventListener('click',function(){
	mobileNav.classList.remove('open');
});


});