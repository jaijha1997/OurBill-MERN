import react, { useState,useEffect } from 'react'

import '../Main.css'


function Allpurchase(){
    const info=localStorage.getItem("userinfo")
    const data =JSON.parse(info)
    
    var token =data.data.Token
    // arnew.map((val)=>{console.log(val.name,val.age)})
    const [old,ne]=useState([])
useEffect(()=>{fetch('/purchase/getitem', {
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
  <th>Item</th>
  <th>Quantity</th>
  <th>Price</th>
  <th>Total Amount</th>

  
</tr>
</thead>
<tbody style={{color:'red',fontWeight:'bold'}} >

{old.map((val)=>(
       <tr > 
     <td>{val.date}</td>
     <td>{val.item}</td>
     <td>{val.quantity}</td>
     <td>{val.price}</td>
     <td>{val.total_bill}</td>
     
     </tr>
     ))}
     
  </tbody>
</table>
        {/* </Card> */}
 </div>
 
    
    
    </div>
    

)

}

export default Allpurchase