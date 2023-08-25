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
        Я Алекс Герера, і хочу поділитися з вами своїм унікальним мистецтвом. Моя особливість полягає в тому, що я не просто фотограф, я творча особистість,
        здатна перетворювати звичайні моменти на витвори мистецтва.
      </p>
      <p className={styles.storyText}>
        Побачити світ крізь мої очі - значить побачити його абсолютно по-новому. Дозвольте мені провести вас подорожжю, де кожна фотографія стане вікном в інший
        світ.
      </p>
    </div>
  );
};

export default Story;
