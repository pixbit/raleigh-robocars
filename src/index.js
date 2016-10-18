// let jQuery = require('./js/vendor/jquery');
// let foundation = import './js/vendor/foundation';
// import './js/app';
//
import React from 'react';
import {render} from 'react-dom';
let TitleComponent = () => {
  return (<h1>Title</h1>);
};
let NavbarComponent = () => {
  return (
    <header>
      <nav className="row align-justify">
        <TitleComponent />
        <ul className="menu small-4 column">
          <li><a href="#how-it-works">How it works</a></li>
          <li><a href="#on-the-road">On the Road</a></li>
        </ul>
      </nav>
    </header>
  );
};
render(<NavbarComponent />, document.getElementById('app'));
