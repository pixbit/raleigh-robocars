import React from 'react';

class ColorPickerComponent extends React.Component {
  constructor() {
    super();
    this.colors = [
      {
        color: '#FFFFFF',
        label: 'white'
      },
      {
        color: '#000000',
        label: 'black'
      },
      {
        color: '#3D3D3D',
        label: 'smoke'
      },
      {
        color: '#BD304f',
        label: 'fierce'
      },
      {
        color: '#44303F',
        label: 'orchid'
      }
    ];
    this.state = {
      colors: this.colors,
      colorChosen: null
    };
    this.choseColor = this.choseColor.bind(this);
  }

  choseColor(colorObject) {
    this.setState({
      colorChosen: colorObject.color,
      colorLabel: colorObject.label
    })
  }

  displayColorSelection(colorObject, index) {
    return (
      <li
      key={index}
      onClick={this.choseColor.bind(this, colorObject)}
      className={colorObject.color === this.state.colorChosen && 'active'}
      style={{background: colorObject.color}}>
        {colorObject.color}
      </li>
    );
  }

  render() {
    return (
      <div>
        <h3>Color Chosen: {this.state.colorChosen || 'none'} {this.state.colorLabel}</h3>
        <ul>
          {this.state.colors.map(this.displayColorSelection, this)}
        </ul>
      </div>
    );
  }
}

export default ColorPickerComponent;
