import react from 'react'
import reactdom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';

function Navheader(){
    return <div>


{/* <Navbar bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand>< Link to ="/"></Link ></Navbar.Brand>
    
    
      <Nav className="me-auto">
        <Nav.Link >< Link to ="/Home"> Home</Link></Nav.Link>
        <Nav.Link ><Link to ="/Todaysbill"> Today Bill</Link></Nav.Link>
        <Nav.Link >< Link to ="/AddBill"> New Bill</Link></Nav.Link>
        <Nav.Link ><Link to ="/Addpurhchase"> New purchase</Link></Nav.Link>
        <Nav.Link ><Link to ="/viewpurchase"> Today purchase</Link></Nav.Link>
        <Nav.Link >< Link to ="/Profile"> Profile</Link></Nav.Link>

      </Nav>
    
  </Container>
</Navbar> */}



<nav className='bg' >
    <div class="nav-wrapper">
      
      <ul id="nav-mobile" >
        <li>< Link to ="/Home"> Home</Link></li>
        <li><Link to ="/Todaysbill"> Today Bill</Link></li>
        <li>< Link to ="/AddBill"> New Bill</Link></li>
        {/* <li><Link to ="/Addpurhchase"> New purchase</Link></li> */}
        {/* <li><Link to ="/viewpurchase"> Today purchase</Link></li> */}
        <li>< Link to ="/Profile"> Profile</Link></li>
      </ul>
    </div>
  </nav>
        
{/* <Navbar bg="primary" variant="dark">
    <Container>
    
    <Nav className="me-auto">
    <Nav.Link >< Link to ="/Home" className='txtcolor'> Home</Link></Nav.Link>
        <Nav.Link ><Link to ="/Todaysbill" className='txtcolor'> Today Bill</Link></Nav.Link>
        <Nav.Link >< Link to ="/AddBill" className='txtcolor'> New Bill</Link></Nav.Link>
        <Nav.Link ><Link to ="/Addpurhchase" className='txtcolor'> New purchase</Link></Nav.Link>
        <Nav.Link ><Link to ="/viewpurchase" className='txtcolor'> Today purchase</Link></Nav.Link>
        <Nav.Link >< Link to ="/Profile" className='txtcolor'> Profile</Link></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  */}
    
    </div>
}

export default Navheader