import { createHeader } from '../../components/Header/Header';
import { createFooter } from '../../components/Footer/Footer';
import styles from './AboutPage.module.scss';

export function createAboutPage(): HTMLElement {
  const page = document.createElement('div');
  page.className = styles.page;
  const main = document.createElement('main');
  main.className = styles.main;
  main.innerHTML = `
    <h1>About us</h1>
    <section aria-labelledby="about-store">
      <h2 id="about-store">About store</h2>
      <p>Krist is an educational online store for clothing and accessories. Here, you can explore the product range, filter items by category and price, and build your shopping cart.</p>
      <p>Our team is developing this project—from the catalog interface to the functionality of the shopping cart.</p>
      <div class="${styles.actions}">
        <a href="#shop/all">Go to catalog</a>
        <a href="#cart">Open cart</a>
      </div>
    </section>
    <section aria-labelledby="about-team">
      <h2 id="about-team">Our team</h2>
      <p>Information about participants and their contributions</p>
      <div class="${styles.team}">
        ${[
          { name: 'Gleb Cherepnin', photo: 'https://avatars.githubusercontent.com/u/171783341' },
          { name: 'Ivan Eroshin', photo: 'https://avatars.githubusercontent.com/u/76559290' },
        ]
          .map(
            ({ name, photo }, index) => `
          <article class="${styles.member}">
            <img class="${styles.avatar}" src="${photo}" alt="${name}" width="120" height="120" loading="lazy">
            <h3>${index + 1}. ${name}</h3>
            <p>Frontend developer</p>
            <p><strong>Contribution -</strong> //TODO</p>
          </article>
        `,
          )
          .join('')}
      </div>
    </section>
  `;
  page.append(createHeader(), main, createFooter());
  return page;
}
