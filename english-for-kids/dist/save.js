"use strict";

function set1() {
  if (sessionStorage.q === 'false') {
    document.querySelector('.menu').classList.add('testimonial-header1');
    document.querySelectorAll('.testimonial-header').forEach(el => el.classList.add('testimonial-header1'));
    document.querySelectorAll('.card_head').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.back').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.rotate').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.front').forEach(el => el.classList.add('front1'));
    document.querySelectorAll('.button').forEach(el => el.style.display = 'block');
    document.getElementById('but').checked = false;
  }
}

window.onload = set1;