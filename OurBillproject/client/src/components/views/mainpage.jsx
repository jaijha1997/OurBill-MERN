import react from 'react'
import reactdom from 'react-dom'
import { Navbar, Nav, Container,NavDropdown,Form,FormControl,Button,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Mainpage(){

    return <div className='Mainpage'>

  
  <div class="row" style={{marginTop:'10rem'}}>
    <div class="col s12 m7">
      <div class="card">
      <span class="card-title" style={{textAlign:'center',marginTop:'2rem',fontFamily:'cursive'}}>Welcome to OurBill</span>
        <div class="card-image">
          
          
        </div>
        <div style={{textAlign:'center',marginBottom:'2rem'}}>
        
    <Link to ="/Login" style={{color:'black', width: '2rem',height:"1rem",backgroundColor:'skyblue',textDecoration:'none'}} >Login</Link>
    </div >
    <div style={{textAlign:'center',marginBottom:'2rem'}}>
    <Link to ="/Register"  style={{color:'black', width: '2rem',height:"1rem",backgroundColor:'skyblue',textDecoration:'none'}} >Register</Link>
    
        </div>
        
        </div>
      </div>
    </div>


</div>



  
}
export default Mainpage