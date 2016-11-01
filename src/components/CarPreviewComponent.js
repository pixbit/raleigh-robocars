import React from 'react';
import './CarPreviewComponent.scss';
class CarPreviewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.cars = {
      '#AAAAAA': 'http://meh.ro/wp-content/uploads/2012/06/meh.ro9954.jpg',
      '#BD304F': 'http://www.speedace.info/automotive_directory/car_images/concept_cars_cool_red_sports_gt.jpg',
      '#3D3D3D': 'https://s-media-cache-ak0.pinimg.com/originals/cc/20/a9/cc20a95502503fae48cebae7d12a03f2.jpg',
      '#44303F': 'http://pre14.deviantart.net/30f7/th/pre/i/2014/251/7/f/ferrari_f80_concept_car__red__by_selsdon20-d7yi3dr.png',
      '#FFFFFF': 'http://cdn.luxuo.com/wp-content/uploads/2009/04/02_chanel_fiole_concept.jpg'
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
