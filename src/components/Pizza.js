import React from "react"

const Pizza = ({ topping, size, vegetarian, handeClick }) => {
  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'vegetarian' : 'not vegetarian'}</td>
      <td><button type="button" className="btn btn-primary" onClick={handeClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
