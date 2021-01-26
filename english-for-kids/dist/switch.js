"use strict";

// -----------------MenuSwitch-------------
document.querySelector('.menu-bar').addEventListener('click', () => {
  document.querySelector('.menu-bar span').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('animate');
}); // -----------------Click-------------

document.onclick = function change() {
  if (event.target.className !== 'menu-bar' && event.target.className !== 'menu testimonial-header1 animate' && event.target.className !== 'menu animate') {
    document.querySelector('.menu-bar span').classList.remove('active');
    document.querySelector('.menu').classList.remove('animate');
  }
}; // -----------------toggleSwitch-------------


if (sessionStorage.q === null) {
  sessionStorage.q = true;
}

if (sessionStorage.q === undefined) {
  sessionStorage.q = true;
}

function set1() {
  sessionStorage.q = document.getElementById('but').checked;

  if (sessionStorage.q === 'false') {
    document.querySelector('.menu').classList.add('testimonial-header1');
    document.querySelectorAll('.testimonial-header').forEach(el => el.classList.add('testimonial-header1'));
    document.querySelectorAll('.card_head').forEach(el => el.style.display === 'none');
    document.querySelectorAll('.back').forEach(el => el.style.display === 'none');
    document.querySelectorAll('.rotate').forEach(el => el.style.display === 'none');
    document.querySelectorAll('.front').forEach(el => el.classList.add('front1'));
    document.querySelectorAll('.button').forEach(el => el.style.display === 'block');
    document.getElementById('g').style.display = 'none';
    document.getElementById('but').checked = false;
  }

  if (sessionStorage.q === 'true') {
    document.querySelector('.menu').classList.remove('testimonial-header1');
    document.querySelectorAll('.testimonial-header').forEach(el => el.classList.remove('testimonial-header1'));
    document.querySelectorAll('.card_head').forEach(el => el.style.display === '');
    document.querySelectorAll('.back').forEach(el => el.style.display === '');
    document.querySelectorAll('.rotate').forEach(el => el.style.display === '');
    document.querySelectorAll('.front').forEach(el => el.classList.remove('front1'));
    document.querySelectorAll('.button').forEach(el => el.style.display === 'none');
    document.getElementById('g').style.display = 'none';
    document.getElementById('but').checked = true;
  }

  location.reload();
}

function set() {
  sessionStorage.q = document.getElementById('but').checked;

  if (sessionStorage.q === 'false') {
    document.querySelector('.menu').classList.add('testimonial-header1');
    document.querySelectorAll('.testimonial-header').forEach(el => el.classList.add('testimonial-header1'));
    document.getElementById('but').checked = false;
  }

  if (sessionStorage.q === 'true') {
    document.querySelector('.menu').classList.remove('testimonial-header1');
    document.querySelectorAll('.testimonial-header').forEach(el => el.classList.remove('testimonial-header1'));
    document.getElementById('but').checked = true;
  }
}