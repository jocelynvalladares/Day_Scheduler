$(document).ready(function() {

    let timeEl = $('<p>');
    let dayEl = $('<p>');
    let box1 = $('#div1');
    let box2 = $('#div2');
    let box3 = $('#div3');
    let box4 = $('#div4');
    let box5 = $('#div5');
    let box12 = $('#div12');
    let box11 = $('#div11');
    let box10 = $('#div10');
    let box9 = $('#div9');

    box1.val(localStorage.getItem('Entry1'));
    box2.val(localStorage.getItem('Entry2'));
    box3.val(localStorage.getItem('Entry3'));
    box4.val(localStorage.getItem('Entry4'));
    box5.val(localStorage.getItem('Entry5'));
    box9.val(localStorage.getItem('Entry9'));
    box10.val(localStorage.getItem('Entry10'));
    box11.val(localStorage.getItem('Entry11'));
    box12.val(localStorage.getItem('Entry12'));

    
}