import React from 'react';
import styles from './Hero.module.scss';
import sprite from 'images/icons.svg';

const Hero = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>Alex Gerera</h1>
        <ul className={styles.heroList}>
          <li className={styles.heroItem}>
            <a href="#Partfolio"> Partfolio</a>
          </li>
          <li className={styles.heroItem}>
            <a href="#Story"> Story</a>
          </li>
          <li className={styles.heroItem}>
            <a href="#Contacts"> Contacts</a>
          </li>
        </ul>
      </div>

      <p className={styles.heroBottomText}>Scroll down</p>
      <svg className={styles.heroIcom}>
        <use href={sprite + '#Arrow'} />
      </svg>
    </div>
  );
};

export default Hero;
