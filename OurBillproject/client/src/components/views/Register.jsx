import react, { useState } from 'react'
import reactdom from 'react-dom'
import { Link } from 'react-router-dom';
import '../Main.css'
import { Navbar, Nav, Container,NavDropdown,Form,FormControl,Button,Card} from 'react-bootstrap';

function Register(){

  const[name,newname]=useState(null)
  const[nick,newnick]=useState(null)
  const[num,newnum]=useState(null)
  const[password,newpassword]=useState(null)

  const sav =  ()=> {
   fetch("/user/register",{
    method:"POST",
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({Name:name,Nickname:nick,Number:num,Password:password})
  })
  .then(res=>res.json())
  .then(alert("user registration success,please continue to login"))
  .then(()=>{
      newname(null)
      newnick(null)
      newnum(null)
      newpassword(null)
    })
    .then((err)=>{
      console.log(err)
    })
}
  

    return <div  >
        
<div class="row">
    <div class="col s12 m5">
      <div class="card-panel teal">
        <Card style={{ width: '28rem' }} className="center"  >
        <Form onSubmit={sav}>
  <Form.Group className="mb-3" >
    <Form.Label style={{ color:'blue',fontSize:'medium',fontFamily:'fantasy'}} >Name</Form.Label>
    <Form.Control  type="Name" value={name} onChange={(e)=>newname(e.target.value)} placeholder="Enter Name" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label style={{ color:'blue',fontSize:'medium',fontFamily:'fantasy'}}>Nick-name</Form.Label>
    <Form.Control  type="Name" value={nick} onChange={(e)=>newnick(e.target.value)} placeholder="Enter Nick-Name" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label style={{ color:'blue',fontSize:'medium',fontFamily:'fantasy'}}>Number</Form.Label>
    <Form.Control type="Name" value={num} onChange={(e)=>newnum(e.target.value)} placeholder="Enter Number" />

  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label style={{ color:'blue',fontSize:'medium',fontFamily:'fantasy'}}>Enter Password</Form.Label>
    <Form.Control type="Name" value={password} onChange={(e)=>newpassword(e.target.value)} placeholder="Enter Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<Button variant="link"><Link to="/Login">Already registered Login here!</Link></Button>
</Card>
      </div>
    </div>
  </div>




    </div> 
    
  }

export default Register