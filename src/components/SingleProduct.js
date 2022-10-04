import React from 'react'
import { CartState } from '../context/Context'
import Rating from './Rating'

export default function SingleProduct({prod}) {
  const {state: {Cart},
          dispatch,
} = CartState()
  return (
    <div>
        <div className="card" style={{ width: "20rem" }}>
  <img src={prod.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{prod.name}</h5>
    <p className="card-text">
    <span>${prod.price.split(".")[0] }</span><br/>
    <span>{prod.fastDelivery ? "Fast Delivery" : "4 Days Delivery"}</span>
    </p>
    <Rating rating={prod.ratings} />
    {
      Cart.some((p) => p.id===prod.id) ? (
        <button 
        onClick={() => {
          dispatch({
            type:"REMOVE_FROM_CART",
            payload: prod
          })
        }}
        className='btn btn-danger'>Remove from cart</button>
      ) : (

    <button 
    onClick={() => {
      dispatch({
        type:"ADD_TO_CART",
        payload: prod
      })
    }}
    className={`btn btn-primary ${!prod.inStock? "disabled": ""}`}>
      {prod.inStock? "AddtoCart" : "outofStock"}
    </button>
      )
    }
  </div>
</div>

    </div>
  )
}
