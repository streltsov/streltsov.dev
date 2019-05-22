const expand = event => event.currentTarget.classList.add('expand');

document
  .querySelectorAll('.cell')
  .forEach(cell => cell.addEventListener('click', event => expand(event)));
