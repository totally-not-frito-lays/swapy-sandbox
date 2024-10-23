import { createSwapy } from 'swapy'

// First demo
const container = document.querySelector('.swp-container')

const swapy = createSwapy(container, {
  // animation: 'dynamic' // or spring or none
  animation: 'spring',
})

swapy.onSwap((event) => {
  console.log(event.data.object);
  console.log(event.data.array);
  console.log(event.data.map);
})

// Original demo
const container1 = document.querySelector('.container-1');
const container2 = document.querySelector('.container-2');
const enableInput = document.querySelector('#enable') as HTMLInputElement;

const swapy1 = createSwapy(container1, {
  animation: 'dynamic',
  swapMode: 'drop',
});

const swapy2 = createSwapy(container2, {
  animation: 'spring',
});

swapy2.onSwap((event) => {
  console.log('swapy2 event', event.data);
});

swapy2.onSwapStart(() =>{
  console.log('swapy2 start');
})

swapy2.onSwapEnd(() =>{
  console.log('swapy2 end');
});

swapy1.enable(false);
swapy1.onSwap((event) => {
  console.log('event.map',event.data.map);
  console.log('event.array',event.data.array);
  console.log('event.object',event.data.object);
});

swapy1.onSwap(() => {
  console.log('swap started');
});

swapy1.onSwapEnd((event) => {
  console.log('swap ended', event);
});

enableInput.addEventListener('change', () => {
  swapy1.enable(enableInput.checked);
});

// You can disable and enable it anytime you want
swapy.enable(true)