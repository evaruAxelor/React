import Aside from "./Components/Aside"
import CardContainer from "./Components/CardContainer";
import NavBar from "./Components/NavBar";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from "react";


export default function App() {

  const [show, setShow] = useState(false)
  const [itemName, setItemName] = useState("")
  const [cartProduct, setCartProduct] = useState([])
    
  const addToCart = (product) =>{
    setShow(true)

    const existingItem = cartProduct.find((item)=> item.title === product.title)
      if(existingItem){
        setItemName(product.title)
        setCartProduct(
          cartProduct.map((item)=>
            item.id === product.id ? {...item, quantity : item.quantity + 1, price : item.price + product.price} : item
          )
        )
      } else {
        setItemName(product.title)
        setCartProduct([...cartProduct, {...product, quantity : 1}])
      }
  }
  
  return (
    <>
      <ToastContainer  position="top-end" className="p-3" style={{ zIndex: 1 }}>
        <Toast onClose={() => setShow(false)} show={show} delay={1500} autohide>
          <Toast.Header>
            <strong className="me-auto">{itemName}</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>Added Successfully.</Toast.Body>
        </Toast>
      </ToastContainer>

      <NavBar />
      <main className="d-flex">
        <CardContainer addToCart={addToCart}/>
        <Aside cartProduct={cartProduct}/>
      </main>
    </>
  )
}
