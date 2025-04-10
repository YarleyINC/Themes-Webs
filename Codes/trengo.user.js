// ==UserScript==
// @name         Theme Dark | Trengo
// @version      2025-04-03
// @description  Trengo Dark Mode Theme
// @author       @YarleyINC
// @match        https://app.trengo.com/*
// @icon         https://assets.trengo.com/release/img/fav/favicon512x512.png
// @require      https://github.com/YarleyINC/Themes-Webs/raw/refs/heads/main/Codes/trengo.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    ////RECUADROS DE VENTANA////
    //Color Fondo Gris Oscuro, Color Fuente Blanco
    GM_addStyle('div.tickets_list.flex.min-w-0.select-none.flex-col.hidden-md-down, div.inbox.list-item-new-style, div.list-item.min-w-0.cursor-pointer.select-none.overflow-hidden, div.collapse-menu-item.flex.cursor-pointer.items-center.rounded.bg-grey-200.text-grey-900.selector-filter-assigned_me, div.items-center.bg-white.border-b-2.border-grey-200, div.flex.w-full.flex-col.sidebar-container.w-350.flex.border-l.border-grey-300 { background-color: #565656; color: #FFFFFF; }');
    //Color Gris Claro, Color Fuente Blanco
    GM_addStyle('div.bg.mt-2.select-none, div.sn.text-15.flex.flex-none.flex-col.border-grey-300.bg-white.pr-0.transition-all.hidden-md-down.main-app-sidebar.w-275, div.scroll-on-hover.relative.min-w-0.flex-1.pt-0 { background-color: #707070; color: #FFFFFF; }');
    //Cuadro de comentarios. Color Fondo Verde Claro, Con Borde Verde y Color Fuente Negro
    GM_addStyle('div.relative.min-h-12.rounded-lg.border-2.border-sun-300.bg-sun-100.p-3.px-12.pl-6, span.circle.avatar.inline-block-40px.flex-shrink-0.select-none.border-2.border-green-lighter.avatar { border-color: #348e3e; background-color: #a1ffac; color: #000000; }');
    //Color Fondo Verde Claro y Color Fuente Negro
    GM_addStyle('div.comment-composer__tab.tab-note.comment-composer__selected-tab.cursor-pointer { background-color: #a1ffac; color: #000000; }');
    //Color Fondo Verde Claro y Color Fuente Negro
    GM_addStyle('div.mt-auto.h-full.rounded-b-md.bg-sun-100.p-4, #privateComposer { background-color: #a1ffac; color: #000000; }');
    //color de fondo #252525 y color fuente blanco #FFFFFF
    GM_addStyle('div.pos-relative.h-full.flex-wrap.rounded-b-xl.bg-white.pt-1, div[data-v-688aab3c].pos-relative.flex-wrap, div.[data-v-e53fab36].comment-composer__tab.tab-public-reply.comment-composer__selected-tab.cursor-pointer, div[data-v-45a9c69a].composer-container.pos-relative.flex.h-full.min-w-0.flex-col.bg-white { background-color: #252525; color: #FFFFFF; }');
    //color de fondo #000000 y tal vez color fuente Negro #000000
    GM_addStyle('div[data-v-e53fab36].comment-composer__tabs-wrapper { background-color: #000000; color: #FFFFFF; }');

    ////PARA LAS FUENTES////
    //Color Fuente Verde (Para nombre de archivos)
    GM_addStyle('a.open-external { color: #8e3434; }');
    //Color Fuente Blanco (Para espacios donde el texto No se encuentra focus o asi lo requiera el espacio)
    GM_addStyle('div.flex.flex-shrink-0.flex-nowrap.items-center.text-sm.leading-none.text-grey-600, span.flex-1.text-ellipsis, span.text-ellipsis, h4.t-text-sm-emphasize.m-0.p-0.text-grey-700, leable.mb-0.ml-auto.text-xs, p.t-text-sm.my-0.ml-6.text-ellipsis.p-0.pr-2.text-grey-700, p.t-text-sm-emphasize.m-0.mr-2.p-0.text-grey-700, p.t-text-sm-emphasize.m-0.p-0.text-grey-700, p.t-text-sm.m-0.ml-1.mt-1.p-0.text-grey-700 { color: #FFFFFF; }');
    //Color Fuente Negro (Para espacios donde el texto esta focus)
    GM_addStyle('div.relative.rounded-lg.text-left.bg-white.pl-12.border-grey-200.b-2x.py-4.px-4.leading-normal.inline, div.mb-1, div.list-item.min-w-0.cursor-pointer.select-none.overflow-hidden.active, span.max-w-100.ml-2.text-ellipsis.whitespace-nowrap.text-grey-600, div.cursor-pointer.p-4, div.e.is-inbound-mail.email-body.p-4, span.mr-1.cursor-pointer.text-ellipsis.rounded-lg.bg-grey-200.leading-none.text-grey-600, div.e.email-body.p-4 { color: #000000; }');
    //Color Fuente Gris (Para cuadros de texto con fondo blanco)
    GM_addStyle('input.w-12.rounded-md.border.border-grey-300.border-opacity-30.px-2.py-1.transition-colors,textarea.w-full.rounded-md.border-2.border-grey-300.border-opacity-30.px-2.py-1.transition-colors { color: #707070; }');

    ////FIX////
    //
    GM_addStyle('div.comment-composer__tab.tab-note.comment-composer__selected-tab.cursor-pointer, div.comment-composer__tab.tab-public-reply.comment-composer__selected-tab.cursor-pointer, div.pos-relative.flex-wrap { position: static; }');
    GM_addStyle('div.assign.dark-light.rounded-lg.px-8.text-center.align-middle { position: relative; }');
    //buscar codigo para eliminar
    //<div data-v-688aab3c="" style="height: 148px;"></div>
    const elements = document.querySelectorAll('div[data-v-688aab3c]');
    // Recorre los elementos encontrados y verifica el estilo
    elements.forEach(element => {
        if (element.style.height === '148px') {
            element.remove();
        }
    });

    //buscar para eliminar la propiedad style "color: inherit;"
    //<a data-hj-suppress="" class="open-external" href="8fep4hfxir-28780.pdf" target="_blank" style="color: inherit; text-decoration: none;">28780.pdf <!--v-if--></a>
    //Para cambiar el color de la propiedad style "color: inherit;"
    const element = document.querySelector('a[data-hj-suppress][class="open-external"]');
    // Verifica si el elemento existe antes de aplicar cambios
    if (element) {
        // Reasigna un nuevo color
        element.style.color = '#8e3434'; // Puedes cambiar 'blue' por cualquier otro color, como 'red', '#123456', etc.
    }

    // Your code here...
})();