import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PropTypes from "prop-types"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'; 
import Popover from 'react-bootstrap/Popover'
import { NavDropdown} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Cart } from './Aside';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

export default function NavBar({handleSort, handleSelect, cartProduct, filterItem, filterPrice, filterCategory}) {

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
          <Nav className="me-auto mx-1">
            <Nav.Link onClick={()=>handleSelect("all")} >All</Nav.Link>
            <Nav.Link onClick={()=>handleSelect("fruit")} >Fruits</Nav.Link>
            <Nav.Link onClick={()=>handleSelect("vegetable")} >Vegetables</Nav.Link>
            <NavDropdown title="Sort" id="navbarScrollingDropdown" onSelect={handleSort} >
            {
              filterItem === false ? <NavDropdown.Item eventKey="title" >Title <FaArrowUp /></NavDropdown.Item> 
              : <NavDropdown.Item eventKey="title" >Title <FaArrowDown /> </NavDropdown.Item>

            }
            {
              filterPrice === false ? <NavDropdown.Item eventKey="price" >Price <FaArrowUp /></NavDropdown.Item> 
              : <NavDropdown.Item eventKey="price" >Price <FaArrowDown /> </NavDropdown.Item>

            }
            {
              filterCategory === false ? <NavDropdown.Item eventKey="category" >Category <FaArrowUp /></NavDropdown.Item> 
              : <NavDropdown.Item eventKey="category" >Category <FaArrowDown /> </NavDropdown.Item>

            }
              <NavDropdown.Divider />
              <NavDropdown.Item href='/'>Clear</NavDropdown.Item>
            </NavDropdown>
          </Nav>

         <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
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
  filterItem : PropTypes.any,
  filterPrice : PropTypes.any,
  filterCategory : PropTypes.any

}