import PropTypes from "prop-types"
import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'; 
import Popover from 'react-bootstrap/Popover'
import { NavDropdown} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { Cart } from './Aside';

export default function NavBar({handleSort, handleSelect, cartProduct, filter,filterData}) {

  const [active,setActive]=useState(null)

  const popoverBottom = (
    <Popover id="popover-positioned-bottom" title="Popover bottom" className="w-100">
      <div className='p-2 w-100 shadow '>
      <Cart cartProduct={cartProduct} />
      </div>
    </Popover>
  );

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="/" className='mx-1'>Grocery Store</Navbar.Brand>
          <Nav defaultActiveKey={9} className="me-auto mx-1">
            <Nav.Link onClick={()=>handleSelect("all") } eventKey={9} >All</Nav.Link>
            <Nav.Link onClick={()=>handleSelect("fruit")} eventKey={8}  >Fruits</Nav.Link>
            <Nav.Link onClick={()=>handleSelect("vegetable")} eventKey={7}>Vegetables</Nav.Link>
            <NavDropdown title="Sort" id="navbarScrollingDropdown" onSelect={handleSort} >
            {
              filterData.map((item)=>(
                <NavDropdown.Item key={item.id} eventKey={item.name} 
                onClick={
                ()=>{
                  setActive(item);
                }
                }>
                {item.name}{" "}
                {
                  active?.id === item.id ? 
                    filter === true ?
                   ( <FaArrowDown /> ) 
                   : filter === false ?
                    ( <FaArrowUp /> )
                   : ""
                   : ""
                }
                 </NavDropdown.Item>
              ))
            }
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>Clear</NavDropdown.Item>
            </NavDropdown>
          </Nav>

         <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom} rootClose>
         <Button className='bg-transparent border-0 text-lg-center'>
            <MdOutlineShoppingCart className='text-white mx-5 position-relative text-black opacity-50' size={40} />
            <p className='bg-danger text-sm-center rounded-4 px-2 position-absolute end-0 top-0 mx-5 mt-1 text-sm-start '>{cartProduct.length}</p> 
        </Button>
        </OverlayTrigger>

      </Navbar>
    </>
  )
}
NavBar.propTypes = {
  handleSort : PropTypes.any,
  handleSelect : PropTypes.any,
  cartProduct : PropTypes.any,
  filter : PropTypes.any,
  filterData : PropTypes.array
}