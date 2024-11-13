import { createSwapy } from 'swapy'

// First demo
const container = document.querySelector('.swp-container');

const swapy = createSwapy(container, {
  // animation: 'none',
  animation: 'dynamic',
  // animation: 'spring',
})

// const swapCountMap = new Map<Element, number>();
// 
// function addSwapParagraph(element: Element) {
//   const article = element.querySelector('article');
//   if (!article) return;

//   // Counter logic
//   const count = swapCountMap.get(article) || 0;
//   swapCountMap.set(article, count + 1);

//   // Adds counter to the article element
//   let paragraph = article.querySelector('p');
//   if (!paragraph) {
//     paragraph = document.createElement('p');
//     article.appendChild(paragraph);
//   }
//   paragraph.textContent = `I was at the top ${count + 1} times`;
// }

function changeTvColor(element : Element) {
  const article = element.querySelector('article');
  if (!article) return;

  // Find out what color it is based on the class
  const color: string = article.className.split('-')[2];
  if (!color) return;

  console.log("changing tv color to: ", color);
  // Change the tv color
  const tv = document.querySelector('#tv');
  if (tv) {
    console.log(color);
    tv.className = `pico-background-${color}-800`;
  }
}

swapy.onSwap(() => {
  const firstChild = container?.firstElementChild;
  if (firstChild) {
    changeTvColor(firstChild);
  }
});

const enableInput = document.querySelector('#enable') as HTMLInputElement;

// initial state set to false
swapy.enable(false);

enableInput.addEventListener('change', () => {
  swapy.enable(enableInput.checked);
});