[![Build status](https://ci.appveyor.com/api/projects/status/n4m5qbcibb6fc785/branch/main?svg=true)](https://ci.appveyor.com/project/natalia-smyslova/menu/branch/main)

[![Netology AHJ](https://github.com/natalia-smyslova/menu/actions/workflows/web.yml/badge.svg)](https://github.com/natalia-smyslova/menu/actions/workflows/web.yml)


Навигационное меню
===

Необходимо реализовать меню для сайта гоночного такси с пунктами «Главная», «Дрифт-такси», «Time Attack» и «Forza Karting». При переходе на страницу соответствующий пункт меню должен подсветиться:  

![Навигационное меню](https://github.com/natalia-smyslova/ra16-homeworks/raw/master/router/menu/assets/menu.jpg)

## Описание компонента

Компонент должен создавать HTML-разметку вида:
```html
<nav class="menu">
  <a class="menu__item" href="/">Главная</a>
  <a class="menu__item" href="/drift">Дрифт-такси</a>
  <a class="menu__item" href="/timeattack">Time Attack</a>
  <a class="menu__item" href="/forza">Forza Karting</a>
</nav>
```
Активный пункт меню помечается классом `menu__item-active`.

## Реализация

Необходимо реализовать компонент `Menu`.
