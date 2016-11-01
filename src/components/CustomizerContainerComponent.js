import React from 'react';

import AddOnsComponent from './AddOnsComponent';
import ColorPickerComponent from './ColorPickerComponent';
import CarPreviewComponent from './CarPreviewComponent';
import './CustomizerContainerComponent.scss';

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
        <ColorPickerComponent changeColor={this.changeColor} carColor={this.state.carColor}/>
        <CarPreviewComponent carColor={this.state.carColor} />
        <AddOnsComponent />
      </div>
    );
  }
}

export default CustomizerContainerComponent;
