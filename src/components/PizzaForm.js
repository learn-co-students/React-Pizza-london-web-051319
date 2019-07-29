import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                props.pizza.topping 
              } onChange={e => props.handleChange(e.target.name, e.target.value)} />
        </div>
        <div className="col">
          <select value={props.pizza.size} className="form-control" name="size" onChange={e => props.handleChange(e.target.name, e.target.value)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" onChange={e => props.handleChange(e.target.name, !props.pizza.vegetarian)} type="radio" value="Vegetarian" checked={props.pizza.vegetarian ? true : false }/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" onChange={e => props.handleChange(e.target.name, !props.pizza.vegetarian)} type="radio" value="Not Vegetarian" checked={!props.pizza.vegetarian ? true : false}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.submitPizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm