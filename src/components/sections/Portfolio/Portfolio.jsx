import React from 'react';
import styles from './Portfolio.module.scss';
import sprite from 'images/icons.svg';

const Portfolio = () => {
  return (
    <div id="Portfolio" className={styles.portfolioSection}>
      <h2 className={styles.portfolioTitle}>Partfolio</h2>
      <ul className={styles.portfolioList}>
        <li className={styles.portfolioItem}>
          <p>Intimate photo session</p>
          <svg className={styles.portfolioIcon}>
            <use href={sprite + '#heart'} />
          </svg>
        </li>
        <li className={styles.portfolioItem}>
          <svg className={styles.portfolioIcon}>
            <use href={sprite + '#business'} />
          </svg>
          <p>Business photo session</p>
        </li>
        <li className={styles.portfolioItem}>
          <p>Wedding photo session</p>
          <svg className={styles.portfolioIcon}>
            <use href={sprite + '#ring'} />
          </svg>
        </li>
        <li className={styles.portfolioItem}>
          <p>Casual photo session</p>
          <svg className={styles.portfolioIcon}>
            <use href={sprite + '#headphones'} />
          </svg>
        </li>
        <li className={styles.portfolioItem}>
          <svg className={styles.portfolioSingleIcon}>
            <use href={sprite + '#Group'} />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
