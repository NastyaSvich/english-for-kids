"use strict";

let rot;

(function rota() {
  const cards = document.querySelectorAll('.card_secondpage');
  const rotate = document.querySelectorAll('.rotate');

  for (let i = 0, len = cards.length; i < len; i += 1) {
    const card = cards[i];
    rot = rotate[i];
    rot.addEventListener('click', () => {
      const c = card.classList;

      if (c.contains('is-flipped') === true) {
        c.remove('is-flipped');
      } else {
        c.add('is-flipped');
      }
    });

    card.onmouseleave = function hid() {
      card.classList.remove('is-flipped');
    };
  }
})();