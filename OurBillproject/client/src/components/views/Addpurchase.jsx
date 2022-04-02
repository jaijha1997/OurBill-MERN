import react, { useState, useEffect } from 'react'
import reactdom from 'react-dom'
import { Card, Form, Table, Button, Label } from 'react-bootstrap'
import '../Main.css'
import TextField from '@material-ui/core/TextField';


function Addpurchase() {




  // let Date,Sender,Reciever,Amount,Pending_amount,Total,Earlier_a
  let [date, newdate] = useState("--/--/--")
  let [item, newitem] = useState("")
  let [quantity, newquantity] = useState("")
  let [price, newprice] = useState("")
  let [total, newtotal] = useState("")
  






  const addpurchase = () => {

    fetch('http://localhost:3000/purchase/additem', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date,
        item:item,
        quantity:quantity,
        price:price,
        total_bill:total
      })

    }).then(() => {
      alert("items added successfully")
      newdate("")
      newitem("")
      newquantity("")
      newprice("")
      newtotal("")
    })

      .catch((err) => {
        console.log(err)
      })

  }


  return <div>

    <Card style={{ width: '30rem'}} className="center1"  >
      <Form>
        
          
          <div className='enterarea'>
             <Form.Label style={{ color:'blue',fontSize:'large',marginRight:'10px'}} >Date</Form.Label>
             <div className='inp'>
            {/* <TextField id="date"  className='inp' value={date} onChange={(e) => newdate(e.target.value)} /> */}
            <TextField
        id="date"
        type="date"
        value={date}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => newdate(e.target.value)}
      />
    
            </div>
            </div>
          
        
          <Form.Group className="mb-3" >
          <div className='enterarea'>
            <Form.Label style={{ color:'blue',fontSize:'large',marginRight:'10px'}} >Item</Form.Label>
            <div className='inp'>
            <input  value={item} onChange={(e) => newitem(e.target.value)} />
            </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" >
          <div className='enterarea'>
            <Form.Label style={{ color:'blue',fontSize:'large',marginRight:'10px'}} >Quantity</Form.Label>
            <div className='inp'>
            <input  value={quantity} onChange={(e) => newquantity(e.target.value)} />
            </div>
            </div>

          </Form.Group>
          <Form.Group className="mb-3" >
          <div className='enterarea'>
            <Form.Label style={{ color:'blue',fontSize:'large',marginRight:'10px'}} >Price</Form.Label>
            <div className='inp'>
            <input  value={price} onChange={(e) => newprice(e.target.value)} />
            </div>
            </div>
          </Form.Group>
         
          <Form.Group className="mb-3" >
          <div className='enterarea'>
            <Form.Label style={{ color:'blue',fontSize:'large',marginRight:'10px'}} >Total</Form.Label>
            <div className='inp'>
            <input value={total} onChange={(e) => newtotal(e.target.value)} />
            </div>
            </div>
          </Form.Group>
         

          
          <Button variant="primary" onClick={() => { addpurchase(); }}>
            Submit
          </Button>
      </Form>

    </Card>


  </div>

}

export default Addpurchase