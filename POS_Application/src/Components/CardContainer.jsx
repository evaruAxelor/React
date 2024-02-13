import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap'

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

export default function CardContainer({addToCart, sortedItems, productType}) {

  return (
    <>

    <section
      className="col-md-8 column-gap-2 d-flex flex-wrap "
      style={{ padding: "10px" }}
    >
      {
        productType ===  "all" ?
          sortedItems.map((product,index)=>{
          return(
            <Cards key={index} link={product.img} title={product.title} price={product.price} addToCart={()=>addToCart(product)}/>
          )
          })
        : 
        sortedItems.filter((item)=> item.category === productType).map((product,index)=>{
          return(
            <Cards key={index} link={product.img} title={product.title} price={product.price} addToCart={()=>addToCart(product)}/>
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
  addToCart : PropTypes.any,
  sortedItems : PropTypes.any,
  productType : PropTypes.any
}
