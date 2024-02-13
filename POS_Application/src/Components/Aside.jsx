import PropTypes from "prop-types"
import { Alert, Button } from "react-bootstrap";

export function Cart({cartProduct, addToCart, removeFromCart}) { 

    const calcTotal = () => {
      return (
        cartProduct.reduce((total,item)=>total + item.price * item.quantity,0) 
      )
    }

  return (
    <>
    {cartProduct.length === 0 ? <Alert variant="warning">Cart is Empty</Alert> :  (
      <ol className="list-group list-group-numbered col-md-9">
          {cartProduct.map((item,index)=>(
              <li key={index} className="d-flex justify-content-between align-items-center list-group-item">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title + " / " + " ₹ "+ item.price}</div>
                  <button className="bg-danger border-0" onClick={()=>removeFromCart(item)}> - </button> &nbsp;&nbsp; {item.quantity} &nbsp;&nbsp; <button className="bg-success border-0" onClick={()=> addToCart(item)}> + </button>
                </div>  
                <Button variant="primary" className="badge rounded-pill bg-primary">
                  {item.price * item.quantity}
                </Button>
              </li>
          ))}
            <div className="d-flex justify-content-between align-items-center list-group-item">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Net Total :</div>
              </div>
              <Button variant="primary" className="badge rounded-pill bg-primary">
              ₹ {calcTotal()}
              </Button>
            </div>
      </ol>
    )}
    </>
  );

}

export default function Aside( { cartProduct, addToCart, removeFromCart }) {
  return (
    <>
    <aside className="col-md-4" style={{ padding:"10px"}}>
        <Cart cartProduct={cartProduct} addToCart={addToCart} removeFromCart={removeFromCart}/>
    </aside>
    </>
  )
}

Cart.propTypes = {
  cartProduct : PropTypes.array,
  setCartProduct : PropTypes.func,
  addToCart : PropTypes.any,
  removeFromCart : PropTypes.any
}
Aside.propTypes = {
  cartProduct : PropTypes.array  ,
  setCartProduct : PropTypes.func,
  addToCart : PropTypes.any,
  removeFromCart : PropTypes.any
}
