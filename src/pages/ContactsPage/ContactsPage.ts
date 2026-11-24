import { createHeader } from '../../components/Header/Header';
import { createFooter } from '../../components/Footer/Footer';
import styles from './ContactsPage.module.scss';

export function createContactsPage(): HTMLElement {
  const page = document.createElement('div');
  page.className = styles.page;
  const main = document.createElement('main');
  main.className = styles.main;
  main.innerHTML = `
    <h1>Contact Us</h1>
    <p>Meet the developers behind Krist and find us on GitHub.</p>
    <div class="${styles.team}">
      <article class="${styles.member}">
        <h2>Gleb Cherepnin</h2>
        <p>Frontend developer</p>
        <a href="https://github.com/Gleb-Cherepnin" target="_blank" rel="noopener noreferrer">github.com/Gleb</a>
      </article>
      <article class="${styles.member}">
        <h2>Ivan Eroshin</h2>
        <p>Frontend developer</p>
        <a href="https://github.com/mindvan" target="_blank" rel="noopener noreferrer">github.com/Ivan</a>
      </article>
    </div>
  `;
  page.append(createHeader(), main, createFooter());
  return page;
}
