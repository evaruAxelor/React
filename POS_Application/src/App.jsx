import Aside from "./Components/Aside"
import CardContainer from "./Components/CardContainer";
import NavBar from "./Components/NavBar";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from "react";
import data from "./Components/Data";


export default function App() {

  const [cartProduct, setCartProduct] = useState([])
  const [toastList, setToastList] = useState([])
  const [productType, setProductType] = useState("all");
  const [sortedItems, setSortedItems] = useState([...data.productData])
  const [filterItem,setFilterItem] = useState(false)
  const [filterPrice, setFilterPrice] = useState(false)
  const [filterCategory, setFilterCategory] = useState(false)


  const sortItems = (eventKey) => {
    let sortedItemsCopy = [...sortedItems];
    if(eventKey === "title"){
      const cartOrder = filterItem ? -1 : 1;
      setFilterItem((filterItem)=>  !filterItem)
      sortedItemsCopy.sort((a, b) =>  cartOrder * ( a.title.charCodeAt(0) - b.title.charCodeAt(0) ));
    }else 
     if(eventKey === "price"){
      const cartOrder = filterPrice ? -1 : 1;
      setFilterPrice((filterPrice)=>  !filterPrice)
      sortedItemsCopy.sort((a, b) =>  cartOrder * ( a.price - b.price ));
    }else 
    if(eventKey === "category"){
      const cartOrder = filterCategory ? -1 : 1;
      setFilterCategory((filterCategory)=>  !filterCategory)
      sortedItemsCopy.sort((a, b) =>  cartOrder * ( a.category.charCodeAt(0) - b.category.charCodeAt(0) ));
    }

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

      <NavBar handleSort={handleSort} handleSelect={handleSelect} cartProduct={cartProduct} filterItem={filterItem} filterPrice={filterPrice} filterCategory={filterCategory}/>
      <main className="d-flex">
        <CardContainer addToCart={addToCart} sortedItems={sortedItems} handleSort={handleSort} productType={productType}/>
        <Aside cartProduct={cartProduct} addToCart={addToCart} removeFromCart={removeFromCart}/>
      </main>
    </>
  )
}
