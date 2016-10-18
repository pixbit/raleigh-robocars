import React from 'react';
let ContentSectionsComponent = (props) => {
  return (
    <section id="how-it-works">
      <div className="row align-center">
        <h1 className="column">{props.section.sectionTitle}</h1>
      </div>
      <div className="row align-center">
        <h2 className="small-7 column">{props.section.sectionIntro}</h2>
      </div>
      <div className="row align-center">
        <p className="small-8 column">{props.section.sectionContent}</p>
      </div>
      <div className="row">
        <div className="flex-video small-12 column">
          <iframe width="560" height="315" src={props.section.youtubeLink} frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};
export default ContentSectionsComponent;
