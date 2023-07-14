import React from 'react';
import styles from './Story.module.scss';
import sprite from 'images/icons.svg';

const Story = () => {
  return (
    <div id="Story" className={styles.storySection}>
      <div className={styles.storyTopThump}>
        <h2 className={styles.storyTitle}>Story</h2>
        <svg className={styles.storyIcom}>
          <use href={sprite + '#man'} />
        </svg>
      </div>

      <p className={styles.storyText}>
        Lorem ipsum dolor sit amet consectetur. Amet ornare vitae pellentesque sem pretium vestibulum dolor. Eget ac pharetra lobortis in donec ultrices id
        arcu. Blandit ultrices nisl at mauris et. Mi nec magna felis pharetra mattis aliquam.
      </p>
      <p className={styles.storyText}>
        Lorem ipsum dolor sit amet consectetur. Amet ornare vitae pellentesque sem pretium vestibulum dolor. Eget ac pharetra lobortis in donec ultrices id
        arcu. Blandit ultrices nisl at mauris et. Mi nec magna felis pharetra mattis aliquam.
      </p>
    </div>
  );
};

export default Story;
