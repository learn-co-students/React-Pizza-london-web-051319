import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  render() {
    const {pizza, pizzaClickHandler} = this.props
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizza.map(pizza => <Pizza key={pizza.id} {...pizza} handeClick={() => pizzaClickHandler(pizza)}/>)
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
