import react, { useState } from 'react'
import reactdom from 'react-dom'
import { Link } from 'react-router-dom';
import '../Main.css'
import { Navbar, Nav, Container,NavDropdown,Form,FormControl,Button,Card} from 'react-bootstrap';
import axios from 'axios';

function Eform(){
    const info = localStorage.getItem("userinfo")
    const newdata = JSON.parse(info)
    var id = newdata.data.id
  const[name,newname]=useState(newdata.data.Name)
  const[nick,newnick]=useState(newdata.data.Nickname)
  
  

  const sav =  ()=> {
    console.log(newdata.data)
   
    axios.patch(`http://localhost:3000/user/editprofile/${id}`,{
Name:name,Nickname:nick,

 'Content-Type':'application/json'
  })
  .then(alert("updated"))
  .then(()=>{
      newname(null)
      newnick(null)
      
      
    })
    .then((err)=>{
      console.log(err)
    })
}
  

    return <div  >
        

        
        <Form >
  <Form.Group className="mb-3" >
    <Form.Label style={{ color:'blue',fontSize:'medium',fontFamily:'fantasy'}} >Name</Form.Label>
    <Form.Control  type="Name" value={name} onChange={(e)=>newname(e.target.value)} placeholder="Enter Name" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label style={{ color:'blue',fontSize:'medium',fontFamily:'fantasy'}}>Nick-name</Form.Label>
    <Form.Control  type="Name" value={nick} onChange={(e)=>newnick(e.target.value)} placeholder="Enter Nick-Name" />
  </Form.Group>

  {/* <Form.Group className="mb-3" >
    <Form.Label style={{ color:'blue',fontSize:'medium',fontFamily:'fantasy'}}>Number</Form.Label>
    <Form.Control type="Name" value={num} onChange={(e)=>newnum(e.target.value)} placeholder="Enter Number" />

  </Form.Group> */}
  {/* <Form.Group className="mb-3" >
    <Form.Label style={{ color:'blue',fontSize:'medium',fontFamily:'fantasy'}}>Enter Password</Form.Label>
    <Form.Control type="Name" value={password} onChange={(e)=>newpassword(e.target.value)} placeholder="Enter Password" />
  </Form.Group> */}

  <Button variant="primary" onClick={sav} >
    Submit
  </Button>
</Form>






    </div> 
    
  }

export default Eform