import React from 'react';
import './CarPreviewComponent.scss';
class CarPreviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.cars = {
      '#AAAAAA': 'https://s3.amazonaws.com/thinkpixbit/public/raleigh-robocars/ghost.png',
      '#BD304F': 'https://s3.amazonaws.com/thinkpixbit/public/raleigh-robocars/red.png',
      '#3D3D3D': 'https://s3.amazonaws.com/thinkpixbit/public/raleigh-robocars/smoke.png',
      '#44303F': 'https://s3.amazonaws.com/thinkpixbit/public/raleigh-robocars/orchid.png',
      '#FFFFFF': 'https://s3.amazonaws.com/thinkpixbit/public/raleigh-robocars/white.png'
    };
  }
  render() {
    return (
      <div id="car-preview" className="columns small-12 large-7">
        <img src={`${this.cars[this.props.carColor]}`} />
      </div>
    );
  }
}

export default CarPreviewComponent;
