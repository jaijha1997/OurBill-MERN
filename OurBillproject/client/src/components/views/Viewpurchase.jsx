import react,{useState} from 'react'
import reactdom from 'react-dom'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, Card ,Modal} from 'react-bootstrap';
import Addpurchase from './Addpurchase';
import Todayspurchasedata from './Todayspurchasedata';

function Viewpurchase(){

    return  <div> 
 <div className='allbillheader' style={{marginBottom:'40px'}}>
<h2> Today's All Purchase</h2>
<Todayspurchasedata/>
</div>
     <Addpurchase/>
    
</div>

    
}

export default Viewpurchase