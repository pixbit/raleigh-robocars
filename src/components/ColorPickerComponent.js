import React from 'react';
import './ColorPickerComponent.scss';
class ColorPickerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
    console.log(props);
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
          onClick={this.props.changeColor.bind(this, x.color, x.label)}
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
      <div id="color-picker" className="columns small-12 large-2">
        <h3 className="columns small-12">Current color: {this.props.carColor || 'no color selected'}</h3>
        <ul className="columns small-12">
          {this.createColors()}
        </ul>
      </div>
    );
  }
}

export default ColorPickerComponent;
