import React from 'react';
class AddOnsComponent extends React.Component {
  constructor() {
    super()
    this.items = [
      {
        chosen: false,
        description: 'Leather seats',
        price: 200
      },
      {
        chosen: false,
        description: 'Body kit',
        price: 2200
      },
      {
        chosen: false,
        description: '24s',
        price: 1850
      }
    ]
    this.state = {
      items: this.items,
      totalPrice: 0
    };
    this.calculatePrice = this.calculatePrice.bind(this);
  }

  calculatePrice(product, index) {
    this.items[index].chosen = !this.items[index].chosen;
    let isChosen = this.items[index].chosen
    this.setState({
      totalPrice: isChosen ?
        this.state.totalPrice += product.price :
        this.state.totalPrice -= product.price,
      items: this.items
    })
  }


  createProductRow(product, index) {
    return(
      <tr key={index}>
        <td>
          <button
            onClick={this.calculatePrice.bind(this, product, index)}>
            {product.chosen ? 'REMOVE': 'ADD'}
          </button>
        </td>
        <td>
          {product.description}
        </td>
        <td>
          ${product.price}
        </td>
      </tr>
    );
  }
  render() {
    return(
      <div className="row">
        <div className="columns small-12">
          <h3>Total Price of Add-ons: ${this.state.totalPrice}</h3>
        </div>
        <table>
          <thead>
            <tr>
              <td>Select</td>
              <td>Description</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {this.items.map(this.createProductRow, this)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default AddOnsComponent;
