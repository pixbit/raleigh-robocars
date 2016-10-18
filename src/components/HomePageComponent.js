import React from 'react';
import NavbarComponent from './NavbarComponent';
import TitleComponent from './TitleComponent';
let companyTitle = 'Raleigh Robocars';
let HomePageComponent = () => {
  return (
    <header>
      <nav className="row align-justify">
        <TitleComponent companyTitle={companyTitle} />
        <NavbarComponent />
      </nav>
    </header>
  );
};

export default HomePageComponent;
