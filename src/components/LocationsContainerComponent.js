import React from 'react';
import './LocationsContainerComponent.scss'
import { withGoogleMap } from 'react-google-maps';

const MyGoogleMap = withGoogleMap(props => {
  <GoogleMap defaultZoom={3} defaultCenter={{lat: props.latitude, lng: props.longitude}} />
})
class LocationsContainerComponent extends React.Component {
  constructor() {
    super();

    this.stores = [
      {
        city: 'Wake Forest',
        latitude: '35.979873',
        longitude: '-78.509723'
      },
      {
        city: 'Durham',
        latitude: '35.994033',
        longitude: '-78.898619'
      },
      {
        city: 'Raleigh',
        latitude: '35.8436867',
        longitude: '-78.7851406'
      },
      {
        city: 'New Delhi',
        latitude: '28.5272181',
        longitude: '77.0688996'
      }
    ];

    this.state = {
      latitude: null,
      longitude: null
    };
  }

  calculateDistance(latitude, longitude) {
    this.stores.forEach((store) => {
      store.distanceFromUser = haversineDistance(
        [store.longitude, store.latitude],
        [longitude, latitude],
        true
      );
    });

  }

  createStoresColumn(store) {
    return (
      <div className="columns small-12 medium-3">
        <h5>{store.city}</h5>
        <MyGoogleMap defaultZoom={3} latitude={store.latitude} longitude={ store.longitude} mapElement={<div style={{height: '100%'}} />} containerElement={<div style={{height: '100%'}} />}>
        </MyGoogleMap>
        <p>{store.distanceFromUser}</p>
      </div>
    );
  }

  getUserLocation() {
    navigator.geolocation.getCurrentPosition((obj) => {
      this.setState({
        latitude: obj.coords.latitude,
        longitude: obj.coords.longitude
      });
      this.calculateDistance(obj.coords.latitude, obj.coords.longitude);
    });
  }

  render() {
    return (
      <div className="columns small-12" id="locations-container">
        <button onClick={this.getUserLocation.bind(this)} className="button">Get Location</button>
        <div className="row">
          {this.stores.map(this.createStoresColumn)}
        </div>
      </div>
    );
  }
}

export default LocationsContainerComponent;

function haversineDistance(coords1, coords2, isMiles) {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  var lon1 = coords1[0];
  var lat1 = coords1[1];

  var lon2 = coords2[0];
  var lat2 = coords2[1];

  var R = 6371; // km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2)
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  if(isMiles) d /= 1.60934;

  return Math.round(d) + " miles from you";
}
