import React from 'react';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div id="Portfolio" className={styles.portfolioSection}>
      <h2>Partfolio</h2>
      <ul>
        <li>intimate photo session</li>
        <li>business photo session</li>
        <li>wedding photo session</li>
        <li>casual photo session</li>
      </ul>
    </div>
  );
};

export default Portfolio;
