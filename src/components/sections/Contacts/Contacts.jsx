import React from 'react';
import styles from './Contacts.module.scss';
import MapMob from 'images/map-mob.jpg';
// import sprite from 'images/icons.svg';

const Contacts = () => {
  return (
    <div id="Contacts" className={styles.contactsSection}>
      <h2>Contacts</h2>
      {/* <svg className={styles.contactsIcon}>
        <use href={sprite + '#'} />
      </svg> */}

      <img src={MapMob} alt="map" />
    </div>
  );
};

export default Contacts;
