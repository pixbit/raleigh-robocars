import React from 'react';
import './ColorPickerComponent.scss';
class ColorPickerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.colors = [
      {
        color: '#FFFFFF',
        label: 'white'
      },
      {
        color: '#AAAAAA',
        label: 'ghost'
      },
      {
        color: '#3D3D3D',
        label: 'smoke'
      },
      {
        color: '#BD304F',
        label: 'fierce'
      },
      {
        color: '#44303F',
        label: 'orchid'
      }
    ];
    this.state = {};
  }

  displayColorSelection(colorObject, index) {
    return (
      <li
      key={index}
      onClick={this.props.changeColor.bind(this, colorObject.color, colorObject.label)}
      className={colorObject.color === this.state.color && 'active'}
      style={{background: colorObject.color}}>
        {colorObject.color}
      </li>
    );
  }

  render() {
    return (
      <div id="color-picker" className="columns small-12 large-2">
        <h3>Color Chosen: {this.props.carColor || 'none'}</h3>
        <ul>
          {this.colors.map(this.displayColorSelection, this)}
        </ul>
      </div>
    );
  }
}

export default ColorPickerComponent;
