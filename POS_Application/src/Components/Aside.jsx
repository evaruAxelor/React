import PropTypes from "prop-types"
import { Alert, Button } from "react-bootstrap";

export function Cart({cartProduct}) { 

  const calcTotal = () => {
    return (
      cartProduct.reduce((total,item)=>total + item.price,0) 
    )
  }

  return (
    <>
    {cartProduct.length === 0 ? <Alert variant="warning">Cart is Empty</Alert> :  (
      <ol className="list-group list-group-numbered col-md-9">
          {cartProduct.map((item,index)=>(
              <li key={index} className="d-flex justify-content-between align-items-center list-group-item">
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>₹ {item.price / item.quantity} * {item.quantity}
                </div>
                <Button variant="primary" className="badge rounded-pill bg-primary">
                  {item.price}
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

export default function Aside( { cartProduct }) {
  return (
    <>
    <aside className="col-md-4" style={{ padding:"10px"}}>
        <Cart cartProduct={cartProduct}  />
    </aside>
    </>
  )
}

Cart.propTypes = {
  cartProduct : PropTypes.array,
  setCartProduct : PropTypes.func
}
Aside.propTypes = {
  cartProduct : PropTypes.array  ,
  setCartProduct : PropTypes.func,
}
