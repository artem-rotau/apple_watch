'use strict'

document.addEventListener('DOMContentLoaded', () => {

	$(document).ready(function(){
		$('.gallery__inner').slick({
			slidesToShow: 5,
			slidesToScroll: 5,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 3000,
			arrows: false,
			responsive: [
				{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
				},
				{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: 2000,
				}
				},
				{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 1000,
				}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});
	});

	const btn1 = document.querySelector('#btn-1'),
			btn2 = document.querySelector('#btn-2'),
			btn3 = document.querySelector('#btn-3'),
			btn4 = document.querySelector('#btn-4'),
			btn5 = document.querySelector('#btn-5'),
			btn6 = document.querySelector('#btn-6'),
			btn7 = document.querySelector('#btn-7'),
			btn8 = document.querySelector('#btn-8'),
			btn9 = document.querySelector('#btn-9'),
			btn10 = document.querySelector('#btn-10');

	const bigImg1 = document.querySelector('#big-img-1'),
			bigImg2 = document.querySelector('#big-img-2'),
			bigImg3 = document.querySelector('#big-img-3'),
			bigImg4 = document.querySelector('#big-img-4'),
			bigImg5 = document.querySelector('#big-img-5'),
			bigImg6 = document.querySelector('#big-img-6'),
			bigImg7 = document.querySelector('#big-img-7'),
			bigImg8 = document.querySelector('#big-img-8'),
			bigImg9 = document.querySelector('#big-img-9'),
			bigImg10 = document.querySelector('#big-img-10');


	function showBigImg(btn, img) {
		btn.addEventListener('click', () => {
			img.style.display = 'block';
		});

		document.querySelectorAll('.close').forEach(item => {
			item.addEventListener('click', () => {
				img.style.display = '';
			});
		});

	}
	showBigImg(btn1, bigImg1);
	showBigImg(btn2, bigImg2);
	showBigImg(btn3, bigImg3);
	showBigImg(btn4, bigImg4);
	showBigImg(btn5, bigImg5);
	showBigImg(btn6, bigImg6);
	showBigImg(btn7, bigImg7);
	showBigImg(btn8, bigImg8);
	showBigImg(btn9, bigImg9);
	showBigImg(btn10, bigImg10);


	const hamburger = document.querySelector('.hamburger'),
		  headerInner = document.querySelector('.header__inner'),
		  ul = document.querySelector('ul');

		  
	hamburger.addEventListener('click', hamburgerBtn);

	function hamburgerBtn() {
		if (headerInner.classList != 'active__header') {
			// Метод toggle объекта classList чередует заданный CSS класс элемента:
			// добавляет класс, если его нет и удаляет, если есть.
			headerInner.classList.toggle('active__header');
			ul.classList.toggle('active__list');
		}
	}
	
	

});