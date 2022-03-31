import react, { useState,useEffect } from 'react'
import reactdom from 'react-dom'
import {Card,Table} from 'react-bootstrap'
import '../Main.css'
import Todaysbilldata from './Todaysbilldata'


function Todaysbill(){
   
 return <div className='allbillheader'>
     
<h2> Today's Bill!</h2>

<Todaysbilldata/>


</div>
  

}

export default Todaysbill