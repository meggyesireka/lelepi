/*
* File: app.js
* Author: Meggyesi Réka
* Copyright: 2023, Meggyesi Réka
* Group: SZOFT I/1/E
* Date: 2023-02-13
* Github: https://github.com/meggyesireka/
* Licenc: GNU GPL
*/

const aElem = document.querySelector('#a');
const bElem = document.querySelector('#b');
const cElem = document.querySelector('#c');
const calcButton = document.querySelector('#calcButton');
const areaElem = document.querySelector('#area');

calcButton.addEventListener('click', () => {
    
    let a = Number(aElem.value);
    let b = Number(bElem.value);
    let c = Number(cElem.value);
    let area = calcArea(a, b, c);
    console.log(area);
    areaElem.value = area;

});

function calcArea(a, b, c) {
    let area = a*b*c;
    return area;
}