import react, { useState,useEffect } from 'react'
import reactdom from 'react-dom'
import {Card,Table} from 'react-bootstrap'
import '../Main.css'


function Todayspurchasedata(){
    const info=localStorage.getItem("userinfo")
    const data =JSON.parse(info)
    
    var token =data.data.Token
    // arnew.map((val)=>{console.log(val.name,val.age)})
    const [old,ne]=useState([])
useEffect(()=>{fetch('/purchase/todaypurchase', {
          method: 'GET',
         headers: {"Authorization" : "Bearer "+ token,
          'Content-Type':'application/json',}
        })
          .then(res=>res.json())
          .then((data)=>{
             let a= Object.values(data.data)
             //console.log(a)
             ne(a)
             //console.log(arnew)
          })},[])
//console.log(old)
return (<div >
    <div>
    
    <table class="centered"  >
<thead style={{color:'blue'}}>
<tr>
  <th>Date</th>
  <th>Item</th>
  <th>Quantity</th>
  <th>Price</th>
  <th>total Amount</th>
 
  
</tr>
</thead>
<tbody style={{color:'red',fontWeight:'bold'}}>

{old.map((val)=>(
       <tr> 
     <td>{val.date}</td>
     <td>{val.item}</td>
     <td>{val.quantity}</td>
     <td>{val.price}</td>
     <td>{val.total_bill}</td>
     
     </tr>
     ))}
     
  </tbody>
</table>
        
 </div>
 </div>
    
    
    

)

}

export default Todayspurchasedata