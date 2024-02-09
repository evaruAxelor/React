import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home" style={{marginLeft:"-290px"}}>Axelor POS</Navbar.Brand>
        </Container>
    </Navbar>
    </>
  )
}
