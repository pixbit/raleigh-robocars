// npm imports
import React from 'react';

// component imports
import FooterComponent from './FooterComponent';
import IntroSectionComponent from './IntroSectionComponent';
import NavbarComponent from './NavbarComponent';
import TitleComponent from './TitleComponent';
import ContentSectionsComponent from './ContentSectionsComponent';

import CustomizerContainerComponent from './CustomizerContainerComponent';
// local variables
let companyTitle = 'Raleigh Robocars';
let contentSectionsInfo = [
  {
    sectionTitle: 'Navigating city streets',
    sectionIntro: 'We’ve taught our cars to navigate through many complicated scenarios on city streets.',
    sectionContent: 'Our cars use their sensors and software to sense objects like pedestrians, cyclists, vehicles and more, and are designed to safely drive around them.',
    youtubeLink: 'https://www.youtube.com/embed/bDOnn0-4Nq8'
  },
  {
    sectionTitle: 'Where we’ve been',
    sectionIntro: 'We’ve been working on our project since 2009, but the dream of self-driving cars goes back much farther.',
    sectionContent: 'It started as early as the 1939 New York World’s Fair where visitors were presented a vision of automated highways. In the mid 2000s, the Defense Advanced Research Projects Agency (DARPA) organized the Grand Challenges where teams gathered to compete with self-driving vehicles. In 2009, Google started the self-driving car project, including team members who had already dedicated years to the technology.',
    youtubeLink: 'https://www.youtube.com/embed/uCezICQNgJU'
  }
];
let HomePageComponent = () => {
  return (
    <div>
      <header>
        <nav className="row align-justify">
          <TitleComponent companyTitle={companyTitle} />
          <NavbarComponent />
        </nav>
      </header>
      <main>
        <IntroSectionComponent />
        {contentSectionsInfo.map(createContentSectionsComponent)}
      </main>
      <FooterComponent />
      <CustomizerContainerComponent />
    </div>
  );
};

export default HomePageComponent;

function createContentSectionsComponent(section, index) {
  return (<ContentSectionsComponent key={'section-' + index} section={section} />);
}
