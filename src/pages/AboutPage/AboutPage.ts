import { createHeader } from '../../components/Header/Header';
import { createFooter } from '../../components/Footer/Footer';
import styles from './AboutPage.module.scss';

const teamMembers = [
  {
    name: 'Gleb Cherepnin',
    photo: 'https://avatars.githubusercontent.com/u/171783341',
    role: 'Frontend Developer',
    contributions: [
      'Project initialization and development environment setup',
      'Login and authentication page layout',
      'Product pages and product card layout',
      'Product catalog implementation',
      'Final bug fixes and application improvements',
      'Project deployment',
    ],
  },
  {
    name: 'Ivan Eroshin',
    photo: 'https://avatars.githubusercontent.com/u/76559290',
    role: 'Frontend Developer',
    contributions: [
      'User profile page layout',
      'Shopping cart page layout',
      'Shopping cart functionality and business logic',
      'Catalog search, filtering and sorting logic',
      'Automated testing and quality checks',
      'Team authorship and contribution documentation',
    ],
  },
];

export function createAboutPage(): HTMLElement {
  const page = document.createElement('div');
  page.className = styles.page;

  const main = document.createElement('main');
  main.className = styles.main;

  main.innerHTML = `
    <h1>About us</h1>

    <section aria-labelledby="about-store">
      <h2 id="about-store">About store</h2>
      <p>
        Krist is an educational online store for clothing and accessories.
        Here, you can explore the product range, filter items by category
        and price, and build your shopping cart.
      </p>
      <p>
        Our team is developing this project — from the catalog interface
        to the functionality of the shopping cart.
      </p>

      <div class="${styles.actions}">
        <a href="#shop/all">Go to catalog</a>
        <a href="#cart">Open cart</a>
      </div>
    </section>

    <section aria-labelledby="about-team">
      <h2 id="about-team">Meet our team</h2>
      <p class="${styles.teamDescription}">
        The people behind the development of Krist.
      </p>

      <div class="${styles.team}">
        ${teamMembers
          .map(
            ({ name, photo, role, contributions }, index) => `
              <article class="${styles.member}">
                <img
                  class="${styles.avatar}"
                  src="${photo}"
                  alt="${name}"
                  width="120"
                  height="120"
                  loading="lazy"
                >

                <h3>${index + 1}. ${name}</h3>
                <p class="${styles.role}">${role}</p>

                <div class="${styles.contribution}">
                  <h4>Contribution</h4>
                  <ul class="${styles.contributionList}">
                    ${contributions.map((item) => `<li>${item}</li>`).join('')}
                  </ul>
                </div>
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
