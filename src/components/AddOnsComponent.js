import React from 'react';
import './AddOnsComponent.scss';
class AddOnsComponent extends React.Component {
  constructor(){
    super();
    this.items = [
      {
        chosen: false,
        description: 'Dolby Surround Sound Stereo System',
        price: 400
      },
      {
        chosen: false,
        description: 'Extra-large cabin',
        price: 1300
      },
      {
        chosen: false,
        description: 'Kevlar tires',
        price: 2650
      },
      {
        chosen: false,
        description: 'Long-range battery',
        price: 2000
      },
      {
        chosen: false,
        description: 'Leather and wood-grain interior',
        price: 3200
      }
    ];
    this.state = { totalPrice : 0, items: this.items};

    this.calculatePrice = this.calculatePrice.bind(this);
  }

  calculatePrice(item, index) {
    this.items[index].chosen = !this.items[index].chosen;
    let isChosen = this.items[index].chosen;
    this.setState({
      totalPrice: isChosen ?
        this.state.totalPrice += item.price:
        this.state.totalPrice -= item.price,
      items: this.items
    });
  }

  createProductRow(item, index) {
    return (
      <tr key={index}>
        <td>
          <button
            className={(item.chosen ? 'chosen': 'success') + ' button'}
            onClick={this.calculatePrice.bind(this, item, index)}>
            {item.chosen ? 'REMOVE': 'ADD'}
          </button>
        </td>
        <td>{item.description} - ${item.price}</td>
      </tr>
    );
  }

  render() {
    return (
      <div id="add-ons" className="columns small-12 large-3">
        <div className="row">
          <div className="small-12 columns">
            <h3>Total Price of Add-ons: ${this.state.totalPrice}</h3>
          </div>
          <table className="columns small-12">
            <thead>
              <tr>
                <td>Select</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              {this.items.map(this.createProductRow, this)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default AddOnsComponent;
