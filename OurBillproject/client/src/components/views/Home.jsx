import react from 'react'
import reactdom from 'react-dom'
import '../Main.css'
import Allbill from './Allbills'
import Allpurchase from './Allpurchase'


function Home(){
   
    
return <div>
<div className='allbillheader' style={{marginBottom:'40px'}}>
     
       <h2> All Bills Till Date!</h2>
    
    <Allbill/>
    
    
    </div>

    <div className='allbillheader' >
     
       <h2> All Purchase Till Date!</h2>
    
    <Allpurchase/>
    
    
    </div>
    </div>
    



}

export default Home