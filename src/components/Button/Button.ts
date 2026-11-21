import styles from './Button.module.scss';

export function createButton(text: string): HTMLButtonElement {
  const button = document.createElement('button');

  button.className = styles.button;
  button.type = 'submit';
  button.textContent = text;

  return button;
}
