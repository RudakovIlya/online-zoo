"use strict";

/*
Логика №2:
1)Получаем объект бургера
2))Получаем объект меню родительский
3)Вешаем обработчик событий на click на бургер(п.1)
4)Добавляем класс к меню(п.2)
*/

//Burger

const body = document.querySelector("body");
const titleH1 = document.querySelector('.title-zoo');
const menuBurger = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const darkBackground = document.querySelector('.dark-background');

if (menuBurger) {
	menu.addEventListener('click', e => {
		const target = e.target;
		if (target.closest('.menu') && target.closest('.icon-menu')) {
			menu.classList.toggle("_active");
			body.classList.toggle("lock");
			titleH1.classList.toggle('change-color')
			darkBackground.classList.toggle('_active')
		} else if (target.closest('.dark-background')) {
			menu.classList.remove("_active");
			body.classList.remove("lock");
			titleH1.classList.remove('change-color')
			darkBackground.classList.remove('_active')
		}
	})
}
