import React from 'react'
import Rating from './Rating'
import'./styles.css'
export default function Filters() {
  const [rate, setRate] = React.useState(2)

  return (
    <div className='filters'>
        <span className='title'>Filters</span>
        <div className="form-check">
  <input
    className="form-check-input"
    type="radio"
    name="exampleRadios"
    id="exampleRadios1"
    defaultValue="option1"
    defaultChecked=""
  />
  <label className="form-check-label" htmlFor="exampleRadios1">
    Ascending
  </label>
</div>
<div className="form-check">
  <input
    className="form-check-input"
    type="radio"
    name="exampleRadios"
    id="exampleRadios2"
    defaultValue="option1"
    defaultChecked=""
  />
  <label className="form-check-label" htmlFor="exampleRadios1">
    Descending
  </label>
</div>

<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    defaultValue=""
    id="defaultCheck1"
  />
  <label className="form-check-label" htmlFor="defaultCheck1">
    Default checkbox
  </label>
</div>


<div className="form-check">
  <input
    className="form-check-input"
    type="checkbox"
    defaultValue=""
    id="defaultCheck1"
  />
  <label className="form-check-label" htmlFor="defaultCheck1">
    Default checkbox
  </label>
</div>
<Rating 
rating={rate} 
style={{cursor : "pointer", margin : "10px"} } 
onClick={(i) => setRate(i+1)}
/>
<button type="button" className="btn btn-light my-3">
  Light
</button>


    </div>
  )
}
