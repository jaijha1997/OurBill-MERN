import react, { useState,useEffect } from 'react'
import reactdom from 'react-dom'
import {Card,Table} from 'react-bootstrap'
import '../Main.css'


function Allbill(){
    const info=localStorage.getItem("userinfo")
    const data =JSON.parse(info)
    
    var token =data.data.Token
    // arnew.map((val)=>{console.log(val.name,val.age)})
    const [old,ne]=useState([])
useEffect(()=>{fetch('/bill/allbills', {
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
return ( <div >
    <div style={{textAlign:'center'}}>
    {/* <Card   style={{ width: '30rem',fontSize:'smaller', }}> */}
    <table class="centered" >
<thead  style={{color:'blue'}}>
<tr>
  <th>Date</th>
  <th>Sender</th>
  <th>Reciever</th>
  <th>Amount</th>
  <th>Pending Amount</th>
  <th>Total Amount</th>
  <th>Earlier Adjustment</th>
  
</tr>
</thead>
<tbody style={{color:'red',fontWeight:'bold'}} >

{old.map((val)=>(
       <tr > 
     <td>{val.date}</td>
     <td>{val.sender}</td>
     <td>{val.receiver}</td>
     <td>{val.amount}</td>
     <td>{val.total_amount}</td>
     <td>{val.pending_amount}</td>
     <td>{val.earlier_adjustment}</td>
     </tr>
     ))}
     
  </tbody>
</table>
        {/* </Card> */}
 </div>
 
    
    
    </div>
    

)

}

export default Allbill