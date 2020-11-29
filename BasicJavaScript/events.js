const btn1 = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');
const  input = document.querySelector('#txtTaskName');

function e(e) {
    console.log(` ${e.type} `);
}
//mouse
btn1.addEventListener('click',e);
ul.addEventListener('dblclick',e);
btn1.addEventListener('mousedown',e);
btn1.addEventListener('mouseup',e);
ul.addEventListener('mouseenter',e);
ul.addEventListener('mouseleave',e);
ul.addEventListener('mouseover',e);
ul.addEventListener('mouseout',e);

//keyboard

input.addEventListener('keydown',e);
input.addEventListener('keyup',e);
input.addEventListener('keydown',e);
input.addEventListener('keypress',e);
input.addEventListener('focus',e);
input.addEventListener('cut',e);
input.addEventListener('past',e);
input.addEventListener('copy',e);
