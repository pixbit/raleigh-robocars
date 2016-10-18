import React from 'react';
let NavbarComponent = () => {
  let elems = [
    {
      link: '#how-it-works',
      linkText: 'How it works'
    },
    {
      link: '#on-the-road',
      linkText: 'On the Road'
    }
  ];
  function createNavbarItems(elem, index) {
    return (
      <li key={index}>
        <a href={elem.link}>
          {elem.linkText}
        </a>
      </li>
    );
  }
  return (
    <ul className="menu small-4 columns">
      {elems.map(createNavbarItems)}
    </ul>
  );
};

export default NavbarComponent;
