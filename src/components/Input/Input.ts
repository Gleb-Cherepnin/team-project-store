import styles from './Input.module.scss';

interface InputOptions {
  type?: 'text' | 'email' | 'password' | 'tel';
  placeholder: string;
  name: string;
}

export function createInput(options: InputOptions): HTMLInputElement {
  const input = document.createElement('input');

  input.className = styles.input;
  input.type = options.type ?? 'text';
  input.placeholder = options.placeholder;
  input.name = options.name;

  return input;
}
