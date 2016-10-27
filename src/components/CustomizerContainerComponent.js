import React from 'react';
import AddOnsComponent from './AddOnsComponent';
import ColorPickerComponent from './ColorPickerComponent';
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
