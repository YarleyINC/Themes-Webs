// ==UserScript==
// @name         Dark Mode
// @version      2025-04-02
// @description  Dark Mode Teme
// @author       @YarleyINC
// @match        https://www.sololearn.com/*
// @icon         https://www.sololearn.com/Images/favicon.ico
// @require      https://github.com/YarleyINC/Themes-Webs/raw/refs/heads/main/Codes/sololearn.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
     'use strict';
     //FONDOS Y FUENTES
     GM_addStyle('div.sl-p-container, nav.sl-navbar, nav.light, ul.sl-navbar__content-list, div.sl-courses-catalog-dropdown, li.sl-courses-catalog-dropdown__item, li.selected, header.le-lesson-header, footer.le-lesson-footer, footer.le-lesson-footer.grey { background-color: #303030; color: #FFFFFF; }');
     GM_addStyle('.le-course-container,div.sl-courses-catalog-dropdown__expand, div.le-lesson, div.sl-complete-celebration__container, div.sl-complete-celebration__footer, div.sol-summary.has-actionBar, div.sol-summary_content{ background-color: #565656; color: #FFFFFF; }');
     //TITULOS O TEXTOS
     GM_addStyle('div.le-quiz-feedback__text, div.sl-complete-celebration__title, span.sl-user-streak__streakDay, span.sl-user-heart__heart-count, div.sl-navigation-actions__bits  { color: #FFFFFF; }');
     GM_addStyle('span.sl-rearrange-answer-item__text  { color: #000000; }');
     //GM_addStyle('span.le-lesson-header__lesson-title { color: #850000; }');
 
 /*
     const jtBody = document.querySelector('body');
     jtBody.classList.add('darktheme');
 
 // Selecciona el elemento por su clase
 const divElement = document.querySelector(".le-course-container");
 // Cambia su estilo
 divElement.style.backgroundColor = "#565656";// Cambia el color de fondo
 divElement.style.color = "#FFFFFF";// Cambia el color del texto
 */
 
 
 })();