import React from 'react';
import AddOnsComponent from './AddOnsComponent';
import ColorPickerComponent from './ColorPickerComponent';
import './CustomizerContainerComponent.scss';
class CustomizerContainerComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div id="customizer">
        <ColorPickerComponent />
        <AddOnsComponent />
      </div>
    );
  }
}

export default CustomizerContainerComponent;
