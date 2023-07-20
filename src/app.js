import anime from 'animejs/lib/anime.es.js';

var tonbi = document.getElementsByClassName("tonbi")[0];
tonbi.style.transform = 'translateX(100px)';

function clickEvent(){
  anime({
        targets: '.tonbi',
        translateX: {
          value: '*=2.5', // 100px * 2.5 = '250px'
          duration: 1000
        },
        width: {
          value: '-=20px', // 28 - 20 = '8px'
          duration: 1800,
          easing: 'easeInOutSine'
        },
        rotate: {
          value: '+=2turn', // 0 + 2 = '2turn'
          duration: 1800,
          easing: 'easeInOutSine'
        },
        direction: 'alternate'
      });
}
tonbi.onclick = clickEvent;

// 【　別の書き方　】
// tonbi.addEventListener('click', function() {
//   anime({
//     targets: '.tonbi',
//     translateX: {
//       value: '*=2.5', // 100px * 2.5 = '250px'
//       duration: 1000
//     },
//     width: {
//       value: '-=20px', // 28 - 20 = '8px'
//       duration: 1800,
//       easing: 'easeInOutSine'
//     },
//     rotate: {
//       value: '+=2turn', // 0 + 2 = '2turn'
//       duration: 1800,
//       easing: 'easeInOutSine'
//     },
//     direction: 'alternate'
//   });
// });

var granimInstance = new Granim({
  element: '#granim-canvas',
  name: 'granim',
  opacity: [1, 1],
  states : {
      "default-state": {
          gradients: [
              ['#834D9B', '#D04ED6'],
              ['#1CD8D2', '#93EDC7']
          ]
      }
  }
});

// granimInstance.start();

var granimInstance = new Granim({
  element: '#canvas-interactive',
  name: 'interactive-gradient',
  elToSetClassOn: '.canvas-interactive-wrapper',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  stateTransitionSpeed: 500,
  states : {
      "default-state": {
          gradients: [
              ['#B3FFAB', '#12FFF7'],
              ['#ADD100', '#7B920A'],
              ['#1A2980', '#26D0CE']
          ],
          transitionSpeed: 10000
      },
      "violet-state": {
          gradients: [
              ['#9D50BB', '#6E48AA'],
              ['#4776E6', '#8E54E9']
          ],
          transitionSpeed: 2000
      },
      "orange-state": {
          gradients: [ ['#FF4E50', '#F9D423'] ],
          loop: false
      }
  }
});

// With jQuery
$('#default-state-cta').on('click', function(event) {
  event.preventDefault();
  granimInstance.changeState('default-state');
  setClass('#default-state-cta')
});
$('#violet-state-cta').on('click', function(event) {
  event.preventDefault();
  granimInstance.changeState('violet-state');
  setClass('#violet-state-cta')
});
$('#orange-state-cta').on('click', function(event) {
  event.preventDefault();
  granimInstance.changeState('orange-state');
  setClass('#orange-state-cta')
});

function setClass(element) {
  $('.canvas-interactive-wrapper a').removeClass('active');
  $(element).addClass('active');
};

const granimInstance2 = new Granim({
  element: '#granimCanvas',
  direction: 'diagonal',
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ['#ff9966', '#ff5e62'],
        ['#00F260', '#0575E6'],
        ['#e1eec3', '#f05053']
      ],
      transitionSpeed: 10000
    }
  }
});

function animateWave() {
  anime({
    targets: '#granimCanvas',
    translateY: ['-50%', '-30%'],
    duration: 2000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  });
}

var wave = document.getElementById("granimCanvas");
wave.onclick = animateWave;


import { Howl } from 'howler';

const soundFile = 'dist/sounds/Chopin-Fantaisie-Impromptu.mp3';

const sound = new Howl({
  src: [soundFile]
});

document.getElementById('playButton').addEventListener('click', function() {
  sound.play();
});
document.getElementById('stopButton').addEventListener('click', function() {
  sound.stop();
});



// ghost cursorは実装できず

// import { path } from "ghost-cursor"

// const from = { x: 100, y: 100 }
// const to = { x: 600, y: 700 }

// const route = path(from, to)

// import { createCursor } from "ghost-cursor"
// import puppeteer from "puppeteer"

// const run = async (url) => {
//   const selector = "#sign-up button"
//   const browser = await puppeteer.launch({ headless: false });
//   const page = await browser.newPage()
//   const cursor = createCursor(page)
//   await page.goto(url)
//   await page.waitForSelector(selector)
//   await cursor.click(selector)
// //   shorthand for
// //   await cursor.move(selector)
// //   await cursor.click()
// }
