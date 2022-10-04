import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'

function Navbar() {
  const {state:{Cart},dispatch} = CartState()
  return (
    <div>
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Link</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle mx-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <FaShoppingCart></FaShoppingCart>
    <span className="badge badge-secondary">{Cart.length}</span>
  </button>
  {Cart.length > 0 ? (
                <ul>
                  {Cart.map((prod) => (
                    <li className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </li>
                  ))}
                  <Link to="/cart">
                    <button className='btn btn-primary'>Go to cart</button>
                  </Link>
                </ul>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar