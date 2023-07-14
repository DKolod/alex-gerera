import React from 'react';
import Hero from 'components/sections/Hero/Hero';
import Contacts from 'components/sections/Contacts/Contacts';
import Portfolio from 'components/sections/Portfolio/Portfolio';
import Story from 'components/sections/Story/Story';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <Story />
      <Contacts />
    </>
  );
};

export default HomePage;
