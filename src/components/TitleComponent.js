import React from 'react';
let TitleComponent = (props) => {
  return (<h1>{props.companyTitle}</h1>);
};
export default TitleComponent;

// prop type validation
TitleComponent.propTypes = {
  companyTitle: React.PropTypes.string
};
