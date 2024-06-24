
import { Container, FormControl, Navbar ,Dropdown, Badge,Nav} from "react-bootstrap"
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" style={{height:80}}>
        <Container>
          <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
          </Navbar.Brand>
          <Navbar.Text className="search">
            <FormControl style={{width:500}} placeholder="Search for Product" className="m-auto"/>


          
          </Navbar.Text>
          <Nav>
         <Dropdown alignRight>
         <Dropdown.Toggle variant="success">
         <FaShoppingCart color="white" fontSize="25px"/>
         <Badge >{12}</Badge>
        </Dropdown.Toggle>

        <Dropdown.Menu style={{minWidth:370}}>
        <span style={{padding:10}}>Cart is Empty</span>
        </Dropdown.Menu>

         </Dropdown>
         </Nav>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header