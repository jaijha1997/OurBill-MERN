import react, { useState,useEffect } from 'react'
import reactdom from 'react-dom'
import {Card,Table} from 'react-bootstrap'
import '../Main.css'
import Todaysbilldata from './Todaysbilldata'
import Addbill from './Addbill'


function Todaysbill(){
   
 return <div> 
 <div className='allbillheader' style={{marginBottom:'40px'}}>
     
<h2> Today's Bill!</h2>

<Todaysbilldata/>
</div>

<Addbill/>
</div>
  

}

export default Todaysbill