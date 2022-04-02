import react, { useEffect, useState } from 'react'
import reactdom from 'react-dom'
import { Link ,useNavigate} from 'react-router-dom';
import '../Main.css'
import { Navbar, Nav, Container,NavDropdown,Form,FormControl,Button,Card} from 'react-bootstrap';
import axios from 'axios'


function Login(){
  // useEffect(()=>{
  //   const userinfo=localStorage.getItem("userinfo")
  //   if(userinfo){
  //   <Redirect to ="/Home"/>
  //   }

  // },[history])
  const navigate = useNavigate();
const [number,newnumber]=useState(null)
const [password,newpassword]=useState(null)
const[dat,newdat]=useState(null)
const sav=async ()=>{

  try{
  
const {data}=await axios.post("http://localhost:3000/login/user",{
Number:number,Password:password,

 'Content-Type':'application/json'
   
   
})

//console.log(JSON.stringify(data))
localStorage.setItem("userinfo",JSON.stringify(data))
alert(data.message)
newdat(data.message)
if(data.message=='Logged In'){
  navigate("/Home")
}

  }
catch(err){
  console.log(err)
  
}

}

    return<div >

        


<div className="row">
    <div className="col s12 m5">
      <div className="card-panel teal">
        <span className="white-text" style={{ marginTop:'2rem',fontSize:'2rem'}} >Welcome to OurBill project, This is a fully functional Bill Split Management project for bachelors, Project has been Built 
        in MERN Tech Technology and source code is available in github.
        </span>
        <Card style={{ width: '28rem' ,marginTop:'2rem'}}  className='center' >
        <Form >
  
  <Form.Group className="mb-3" >
    
    <Form.Control  value={number}  placeholder="Enter Number" onChange={(e)=>newnumber(e.target.value)} />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Control type="Password" value={password}  placeholder="Enter Password" onChange={(e)=>newpassword(e.target.value) }/>
  </Form.Group>

  <Button variant="primary" type="Button" onClick={sav}>
    Login
  </Button>
</Form>
<Button variant="link"><Link to="/Register">Register Here!</Link></Button>
</Card>
      </div>
    </div>
  </div>





    </div>
    



    }
  
export default Login