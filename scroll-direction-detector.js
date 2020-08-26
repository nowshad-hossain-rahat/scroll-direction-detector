/*******************
	
	Name : scroll-direction-detector.js
	Author : Nowshad Hossain Rahat
	Version : 1.0 ( FINAL )
	Author URL : https://twitter.com/nhrtrix
	
******************1*/

function scrollUpDown(fun1,fun2){
    let scrolled = 0;
    window.onscroll = (e) => {
    	if(window.pageYOffset>scrolled){fun2();}else if(window.pageYOffset<scrolled){fun1();}
    	scrolled = window.pageYOffset;
    };
}