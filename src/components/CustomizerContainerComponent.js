import React from 'react';

import AddOnsComponent from './AddOnsComponent';
import ColorPickerComponent from './ColorPickerComponent';
import CarPreviewComponent from './CarPreviewComponent';
import './CustomizerContainerComponent.scss';

import LocationsContainerComponent from './LocationsContainerComponent';

class CustomizerContainerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      carColor: 'blue'
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(newCarColor) {
    this.setState({
      carColor: newCarColor
    });
  }
  render() {
    return (
      <div id="customizer" className="row">
        <ColorPickerComponent changeColor={this.changeColor.bind(this)} />
        <CarPreviewComponent carColor={this.state.carColor} />
        <AddOnsComponent />
        <LocationsContainerComponent />
      </div>
    );
  }
}

export default CustomizerContainerComponent;
