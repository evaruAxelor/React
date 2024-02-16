import { useState } from "react";
import { useEffect } from "react";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Aside from "./Components/Aside"
import CardContainer from "./Components/CardContainer";
import NavBar from "./Components/NavBar";
import {data, filterData} from "./Components/Data";

export default function App() {

  const allData = data.productData

  const [cartProduct, setCartProduct] = useState([])
  const [toastList, setToastList] = useState([])
  const [productType, setProductType] = useState("all");
  const [sortedItems, setSortedItems] = useState(allData)
  const [filter, setFilter] = useState(false)


const sortItems = (eventKey) => {
    let sortedItemsCopy = [...sortedItems];

    filterData.map((item)=>{
      if(eventKey === item.name){
        const cartOrder = filter ? -1 : 1;
        setFilter((filter) => !filter)
        if(eventKey === "title"){
          sortedItemsCopy.sort((a, b) => (
            cartOrder * ( a.title.localeCompare(b.title) )))
        }
        else if(eventKey === "category" ){
          sortedItemsCopy.sort((a, b) => (
            cartOrder * ( a.category.localeCompare(b.category) )))
        }
       else{
          sortedItemsCopy.sort((a, b) => (
            cartOrder * ( a.price - b.price)))
        }
      }
    })

    setSortedItems(sortedItemsCopy);
};

const handleSelect=(eventKey)=>{
     setProductType(eventKey)
}

const handleSort = (selectedOption)=>{
    sortItems(selectedOption)
}


const addToCart = (product) =>{
    setToastList((prev)=>[...prev,product.title])
    
    const existingItem = cartProduct.find((item)=> item.title === product.title)
    if(existingItem){
      setCartProduct(
          cartProduct.map((item)=>
            item.id === product.id ? {...item, quantity : item.quantity + 1 } : item
          )
        )
      }
      else {
      setCartProduct([...cartProduct, {...product, quantity : 1}])
    } 
    
    setTimeout(()=>{
      setToastList((prev)=>prev.filter((product,index)=> index !== 0))
    },3000)
}
  
const removeFromCart = (item) =>{

    const existingItem = cartProduct.find((i)=> i.id === item.id)

    if(existingItem.quantity > 1){
      setCartProduct(
        cartProduct.map((cartItem)=>
          cartItem.id === existingItem.id ? {...cartItem, quantity : cartItem.quantity - 1 } : cartItem
        )
      )
    }

    if(existingItem.quantity === 1){
      setCartProduct((prev)=>prev.filter((item)=>item.id!==existingItem.id))
    }

}

useEffect(()=>{
        const cartProduct = JSON.parse(localStorage.getItem("cartProducts"))

        if(cartProduct && cartProduct.length > 0){
          setCartProduct(cartProduct)
        }
},[])

useEffect(()=>{
      localStorage.setItem("cartProducts", JSON.stringify(cartProduct))
},[cartProduct])

  return (
    <>
      <ToastContainer  position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
       {toastList.map((title,index)=>(
        <Toast key={index}>
          <Toast.Header>
            <strong className="me-auto">{title}</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>Added Successfully.</Toast.Body>
        </Toast>
       ))}
      </ToastContainer>

      <NavBar handleSort={handleSort} handleSelect={handleSelect} cartProduct={cartProduct} filter={filter} filterData={filterData}/>
      <main className="d-flex">
        <CardContainer addToCart={addToCart} sortedItems={sortedItems} handleSort={handleSort} productType={productType}/>
        <Aside cartProduct={cartProduct} addToCart={addToCart} removeFromCart={removeFromCart}/>
      </main>
    </>
  )
}
