import React from 'react';
const axios = window.axios;

let apiKey = 'AIzaSyCesC_XLFQgBIX7ttLz7ScGi9hv4QViSis';
class LocationsContainerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: null,
      longitude: null
    };
  }

  calculateDistance(latitude, longitude) {
    let stores = [
      {
        description: 'Raleigh, NC',
        longitude: '-78.7851406',
        latitude: '35.8436867'
      },
      {
        description: 'Asheville, NC',
        longitude: '-82.7054901',
        latitude: '35.538851'
      },
      {
        description: 'Asheboro, NC',
        longitude: '-79.9018682',
        latitude: '35.7190867'
      }
    ];
    let urls = stores.map(store => {
      return `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${latitude},${longitude}&destinations=${store.latitude},${store.longitude}&key=${apiKey}`;
    });
    let requests = urls.map(axios.get);
    Promise.all(requests)
      .then(responses => {
        console.log(responses);
      })
      .catch(console.error);
  }

  dispatchLocation(coordsObject) {
    navigator.geolocation.getCurrentPosition(obj => {
      this.setState({
        latitude: obj.coords.latitude,
        longitude: obj.coords.longitude
      });

      this.calculateDistance(obj.coords.latitude, obj.coords.longitude);
    });
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.dispatchLocation.bind(this)}> Get Location </button>
        <div>
          {this.state.latitude} {this.state.longitude}
        </div>
      </div>
    );
  }
}

export default LocationsContainerComponent;
