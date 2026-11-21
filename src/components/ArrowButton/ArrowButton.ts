import styles from './ArrowButton.module.scss';

type ArrowDirection = 'previous' | 'next';

export function createArrowButton(
  direction: ArrowDirection,
  disabled: boolean,
  onClick: () => void,
): HTMLButtonElement {
  const button = document.createElement('button');
  button.className = styles.button;
  button.type = 'button';
  button.disabled = disabled;

  button.setAttribute('aria-label', direction === 'previous' ? 'Previous' : 'Next');

  const arrow = document.createElement('span');
  arrow.className = styles.arrow;

  if (direction === 'previous') {
    arrow.classList.add(styles['arrow--previous']);
  }

  button.append(arrow);
  button.addEventListener('click', onClick);

  return button;
}
