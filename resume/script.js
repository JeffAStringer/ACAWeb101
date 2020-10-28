const element = document.querySelector('.my-element');
element.classList.add('animate__animated', 'animate__rubberBand');
//You can detect when an animation ends:

const element = document.querySelector('.Tesla');
element.classList.add('animate__animated', 'animate__rubberBand');

element.addEventListener('animationend', () => {
  // do something
});
//or change its duration:

const element = document.querySelector('.Tesla');
element.style.setProperty('--animate-duration', '2s');
//You can also use a simple function to add the animations classes and remove them automatically:

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });
//And use it like this:

animateCSS('.Tesla', 'rubberBAnd');

// or
animateCSS('.Tesla', 'rubberBand').then((message) => {"Hello World" 
  // Do something after the animation
});