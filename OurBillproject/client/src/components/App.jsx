import react from 'react'
import reactdom from 'react-dom'
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import Navheader from "./views/Navbar"
import Login from './views/Login'
import Register from './views/Register';
import Home from './views/Home';
import Todaysbill from './views/Todaysbill'
import Addbill from './views/Addbill'
import Addpurchase from './views/Addpurchase';
import Viewpurchase from './views/Viewpurchase';
import Profile from './views/profile';
import Mainpage from './views/mainpage';

function App(){
    return <div>
        
    
    <BrowserRouter>
    
    <Routes>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>

    
    
    
    <Route  path="/" element={<Mainpage/>}/>
    <Route  path="/Home" element={<><Navheader></Navheader><Home/></>}/>
    <Route path="/bills" element ={<><Navheader></Navheader><Todaysbill/></>}/>
    
    {/* <Route path="/AddBill" element ={<><Navheader></Navheader><Addbill/></>}/> */}
    {/* <Route path="/Addpurchase" element ={<><Navheader></Navheader><Addpurchase/></>}/> */}
    <Route path="/purchase" element ={<><Navheader></Navheader><Viewpurchase/></>}/>
    <Route path="/Profile" element ={<><Navheader></Navheader><Profile/></>}/>
    
    
    </Routes>
    
    
    
    
  
    </BrowserRouter>
    
    
    
    </div>
}


export default App