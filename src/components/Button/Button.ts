import './Button.css';

export function createButton(text: string): HTMLButtonElement {
  const button = document.createElement('button');

  button.className = 'button';
  button.type = 'submit';
  button.textContent = text;

  return button;
}
