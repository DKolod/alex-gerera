import React from 'react';
import styles from './Contacts.module.scss';
import MapMob from 'images/map-tablet.jpg';
import sprite from 'images/icons.svg';
import SocialLinkList from 'components/share/SocialLinkList';

const Contacts = () => {
  return (
    <div id="Contacts" className={styles.contactsSection}>
      <h2>Contacts</h2>

      <svg className={styles.contactsMainIcon}>
        <use href={sprite + '#icon-Group'} />
      </svg>

      <img src={MapMob} alt="map" />

      <SocialLinkList id="Contacts" />
    </div>
  );
};

export default Contacts;
