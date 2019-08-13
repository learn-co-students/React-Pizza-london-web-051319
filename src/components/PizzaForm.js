import React from "react"

const PizzaForm = ({pizza, handleChange, updatePizza}) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" name="topping" onChange={handleChange} value={
                pizza.topping
              }/>
        </div>
        <div className="col">
          <select value={pizza.size} className="form-control" name="size" onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value={pizza.vegetarian ? true : false} checked={pizza.vegetarian === "true" || pizza.vegetarian === true} onChange={handleChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name="vegetarian" type="radio" value={pizza.vegetarian ? false : true} checked={pizza.vegetarian === "false" || pizza.vegetarian === false} onChange={handleChange}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={updatePizza}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
