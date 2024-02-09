import PropTypes from 'prop-types';
import data from './Data.js'
import { Dropdown, Card, Button } from 'react-bootstrap'
import { useState } from 'react';

export function Cards({ link, title, price, addToCart}) {

  return (
    <>
    <Card style={{ width: '190px', height:"290px" ,padding:"16px", marginLeft:"5px"}} className='border'>
      <Card.Img variant="top" src={link} style={{height:"130px" , minHeight:"130px", backgroundSize :"cover"}} />
      <Card.Body style={{marginLeft:"-15px"}}>
        <Card.Title className=''><h5 style={{color: "#212529"}}>{title}</h5></Card.Title>
        <Card.Text>
          <b>₹ {price}</b>
        </Card.Text>
        <Button variant="primary" onClick={addToCart}>Add To Cart</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default function CardContainer({addToCart}) {

  const [productType, setProductType] = useState("all");
  const [sortedItems, setSortedItems] = useState([...data.productData]);

  const sortItems = (eventKey) => {
    let sortedItemsCopy = [...sortedItems];
    if (eventKey === "A-Z") {
      sortedItemsCopy.sort((a, b) => a.title > b.title ? 1 : -1);
    }else if (eventKey === "Z-A"){
      sortedItemsCopy.sort((a, b) => a.title > b.title ? -1 : 1);
    }else if (eventKey === "price_asc") {
      sortedItemsCopy.sort((a, b) => a.price - b.price);
    } else if (eventKey === "price_desc") {
      sortedItemsCopy.sort((a, b) => b.price - a.price);
    }
    setSortedItems(sortedItemsCopy);
  };

  const handleSelect=(eventKey)=>{
     setProductType(eventKey)
  }

  const handleSort = (selectedOption)=>{
    sortItems(selectedOption)
  }

  return (
    <>
    <section className='mx-1'>
      <Dropdown className='mt-3 text-center' onSelect={handleSelect}>
        <Dropdown.Toggle variant='success'>Filter Products</Dropdown.Toggle>
        <Dropdown.Menu className='text-center'>
          <Dropdown.Item eventKey="all">All</Dropdown.Item>
          <Dropdown.Item eventKey="fruit" >Fruits</Dropdown.Item>
          <Dropdown.Item eventKey="vegetable">Vegetables</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className='mt-3 text-center' onSelect={handleSort}>
        <Dropdown.Toggle variant='success'>Sort Products</Dropdown.Toggle>
        <Dropdown.Menu className='text-center'>
          <Dropdown.Item eventKey="A-Z">A - Z</Dropdown.Item>
          <Dropdown.Item eventKey="Z-A" >Z - A</Dropdown.Item>
          <Dropdown.Item eventKey="price_asc">Price : low to high</Dropdown.Item>
          <Dropdown.Item eventKey="price_desc">Price : high to low</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </section>

    <section
      className="col-md-8 column-gap-2 d-flex flex-wrap "
      style={{ padding: "10px" }}
    >
      {
        productType ===  "all" ?
          sortedItems.map((product,index)=>{
          return(
            <Cards key={index} link={product.img} title={product.title} price={product.price} addToCart={()=>addToCart(product)} product={product}/>
          )
          })
        : 
        sortedItems.filter((item)=> item.category === productType).map((product,index)=>{
          return(
            <Cards key={index} link={product.img} title={product.title} price={product.price} addToCart={()=>addToCart(product)} product={product}/>
          )
        })
      }
    </section>
    </>
  );
}


Cards.propTypes = {
 link : PropTypes.string.isRequired,
 title : PropTypes.string.isRequired,
 price : PropTypes.number.isRequired,
 cartItem : PropTypes.string,
 id : PropTypes.func,
 addToCart : PropTypes.any
}
CardContainer.propTypes = {
  cartItem : PropTypes.string,
  addToCart : PropTypes.any
}
