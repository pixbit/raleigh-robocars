import React from 'react';

class ColorPickerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: null
    };
  }

  createColors() {
    let colors = [
      {color: '#FFFFFF', label: 'white'},
      {color: '#3D3D3D', label: 'smoke'},
      {color: '#AAAAAA', label: 'ghost'},
      {color: '#BD304F', label: 'fierce'},
      {color: '#44303F', label: 'orchid'}
    ];
    return colors.map((x, index) => {
      return (
        <li
          className={this.state.color === x.color && 'active'}
          style={{background:x.color}}
          onClick={this.changeColor.bind(this, x.color, x.label)}
          key={index}>
          {x.color}
        </li>
      );
    });
  }

  changeColor(incomingColor, incomingColorLabel) {
    this.setState({color: incomingColor, colorLabel: incomingColorLabel});
  }

  render() {
    return (
      <div>
        <h3>Current color: {this.state.color || 'no color selected'} {this.state.colorLabel}</h3>
        <ul>
          {this.createColors()}
        </ul>
      </div>
    );
  }
}

export default ColorPickerComponent;
