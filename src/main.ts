import { createSwapy } from 'swapy'

// First demo
const container = document.querySelector('.swp-container')

const swapy = createSwapy(container, {
  animation: 'none',
  // animation: 'dynamic',
  // animation: 'spring',
})

const swapCountMap = new Map<Element, number>();

function addSwapParagraph(element: Element) {
  const article = element.querySelector('article');
  if (!article) return;

  const count = swapCountMap.get(article) || 0;
  swapCountMap.set(article, count + 1);

  let paragraph = article.querySelector('p');
  if (!paragraph) {
    paragraph = document.createElement('p');
    article.appendChild(paragraph);
  }
  paragraph.textContent = `I was at the top ${count + 1} times`;
}

swapy.onSwap(() => {
  const firstChild = container?.firstElementChild;
  if (firstChild) {
    addSwapParagraph(firstChild);
  }
});

const enableInput = document.querySelector('#enable') as HTMLInputElement;

enableInput.addEventListener('change', () => {
  swapy.enable(enableInput.checked);
});