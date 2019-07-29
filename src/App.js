import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
import Pizza from './components/Pizza';
class App extends Component {
  state= {
    pizzas: [],
    selectedPizza: {
      id: "",
      topping: "",
      size: "",
      vegetarian: ""
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3000/pizzas`).then(resp => resp.json()).then(pizzas => this.setState({pizzas}))
  }
  
  selectPizza = (selectedPizza) => {
    this.setState({selectedPizza})
  }

  handleChange = (key, value) => {
    this.setState({selectedPizza: {
        ...this.state.selectedPizza,
        [key]: value
      }
    })
  }

  submitPizza = (e) => {
    const newPizza = this.state.selectedPizza
    this.setState({
      pizzas: this.state.pizzas.map(pizza => {
        if (pizza.id !== newPizza.id) return pizza
        return newPizza
      })
    })
    fetch(`http://localhost:3000/pizzas/${newPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'},
      body: JSON.stringify(newPizza)
    })
  }


  render() {
    const pizzas = this.state.pizzas
    return (
      <Fragment>
      <PizzaForm pizza={this.state.selectedPizza} submitPizza={this.submitPizza} handleChange={this.handleChange}/>   
      <PizzaList pizzas ={pizzas} selectPizza={this.selectPizza}/>
      </Fragment>
    );
  }
}

export default App;
