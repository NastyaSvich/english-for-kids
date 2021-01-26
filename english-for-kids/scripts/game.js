function shuffle(e) {
  for (let c = e.length - 1; c > 0; c -= 1) {
    const b = Math.floor(Math.random() * (c + 1));
    const a = e[c];
    e[c] = e[b];
    e[b] = a;
  }
  return e;
}


// -----------------Game-------------

const keyLayout = [1, 2, 3, 4, 5, 6, 7, 8];
const aud = document.querySelectorAll('audio');
const sou = document.querySelectorAll('.front');
for (let i = 0; i <= 7; i += 1) {
  aud[i].setAttribute('data', i + 1);
  sou[i].setAttribute('data', i + 1);
}

let prov = 1; let prov1 = 0; let prov2 = 0; let
  prov3 = 0;
let click = 0;
let q = 0;
const sounds = document.querySelectorAll('audio');
const e = [];
for (let p = 0; p <= 7; p += 1) {
  e[p] = sounds[p];
}
shuffle(e);


function game() {
  document.getElementById('game').value = click;
  click += 1;
  for (let p = 0; p <= 7; p += 1) {
    if (click - 1 === p) {
      q = e[p];

      setTimeout(() => { q.play(); }, 1000);

      const x = 0;
      const align = q.getAttribute('data');
      document.getElementById('front1').addEventListener('click', () => {
        if (align === '1') {
          document.getElementById('front1').classList.add('hide');
          prov1 += 1;
          game();
        } else prov2 += 1;
      });
      document.getElementById('front2').addEventListener('click', () => {
        if (align === '2') {
          document.getElementById('front2').classList.add('hide');
          prov1 += 1;
          game();
        } else prov2 += 1;
      });
      document.getElementById('front3').addEventListener('click', () => {
        if (align === '3') {
          document.getElementById('front3').classList.add('hide');
          prov1 += 1;
          game();
        } else prov2 += 1;
      });
      document.getElementById('front4').addEventListener('click', () => {
        if (align === '4') {
          document.getElementById('front4').classList.add('hide');
          prov1 += 1;
          game();
        } else prov2 += 1;
      });
      document.getElementById('front5').addEventListener('click', () => {
        if (align === '5') {
          document.getElementById('front5').classList.add('hide');
          prov1 += 1;
          game();
        } else prov2 += 1;
      });
      document.getElementById('front6').addEventListener('click', () => {
        if (align === '6') {
          document.getElementById('front6').classList.add('hide');
          prov1 += 1;
          game();
        } else prov2 += 1;
      });
      document.getElementById('front7').addEventListener('click', () => {
        if (align === '7') {
          document.getElementById('front7').classList.add('hide');
          prov1 += 1;
          game();
        } else prov2 += 1;
      });
      document.getElementById('front8').addEventListener('click', () => {
        if (align === '8') {
          document.getElementById('front8').classList.add('hide');
          prov1 += 1;
          game();
        } else prov2 += 1;
      });
      if (click > 0) {
        document.getElementById('game').style.display = 'none';
        document.getElementById('g').style.display = 'block';
      }
    }
  }
}

// -----------------Win/Lose pictures-------------

function hide() {
  document.querySelectorAll('.front').forEach((el) => el.style.display = 'none');
  document.querySelectorAll('.button').forEach((el) => el.style.display = 'none');
  document.querySelectorAll('.card_secondpage').forEach((el) => el.style.display = 'none');
  document.getElementById('marks').style.display = 'none';
  document.getElementById('g').style.display = 'none';
  document.getElementById('main').style.display = 'none';
  document.getElementById('body').style.backgroundColor = 'white';
}

// -----------------Marks-------------

document.getElementById('main').addEventListener('click', () => {
  if (prov === prov1) {
    document.getElementById('mus1').play();
    prov += 1;
    prov2 = 0;
    const pc = document.getElementById('marks');
    const pic = document.createElement('IMG');
    pic.src = '../img/star-win.svg';
    pc.appendChild(pic);
  } else if (prov2 > 0) {
    prov2 = 0;
    prov3 += 1;
    document.getElementById('mus2').play();
    const pc = document.getElementById('marks');
    const pic = document.createElement('IMG');
    pic.src = '../img/star.svg';
    pc.appendChild(pic);
  }
  if (prov1 === 8) {
    if (prov3 > 0) {
      const pc1 = document.getElementById('marks1');
      const pic1 = document.createElement('IMG');
      pic1.src = '../img/failure.jpg';
      pc1.appendChild(pic1);
      document.getElementById('time').style.display = 'block';
      document.getElementById('min').innerHTML = prov3;
      setTimeout(() => { document.getElementById('fail').play(); }, 1000);
      setTimeout(() => { document.location.href = '../index.html'; }, 5000);
      hide();
    } else {
      const pc1 = document.getElementById('marks1');
      const pic1 = document.createElement('IMG');
      pic1.src = '../img/success.jpg';
      pc1.appendChild(pic1);
      setTimeout(() => { document.getElementById('success').play(); }, 1000);
      setTimeout(() => { document.location.href = '../index.html'; }, 5000);
      hide();
    }
  }
});


// -----------------Repeat-------------

function g() {
  q.play();
}
