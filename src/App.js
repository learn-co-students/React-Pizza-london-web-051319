import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import API from './adapters/API'

class App extends Component {

  state = {
    pizzas: [],
    editPizza: {}
  }

  componentDidMount() {
    API.getPizzas() 
      .then(pizzas => this.setState({ pizzas }))
  }

  pizzaClickHandler = pizza => {
    this.setState({ editPizza: pizza})
  }

  changeVegOption = (event) => {
    let value = event.target.value
    let name = event.target.name

    this.setState(prevState => ({ 
      editPizza: {
        ...prevState.editPizza,
        [name]: value
    }
  }))
  }

  updatePizza = newPizza => {
    API.updatePizzas(this.state.editPizza)

    this.setState({})
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.editPizza} handleChange={this.changeVegOption} updatePizza={this.updatePizza}/>
        <PizzaList pizza={this.state.pizzas} pizzaClickHandler={this.pizzaClickHandler}/>
      </Fragment>
    );
  }
}

export default App;
