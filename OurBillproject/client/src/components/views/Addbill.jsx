import react, { useState, useEffect } from 'react'
import reactdom from 'react-dom'
import { Card, Form, Table, Button, Label } from 'react-bootstrap'
import '../Main.css'
import TextField from '@material-ui/core/TextField';


function Addbill() {




  // let Date,Sender,Reciever,Amount,Pending_amount,Total,Earlier_a
  let [date, newdate] = useState("--/--/--")
  let [sender, newsender] = useState("")
  let [receiver, newreciever] = useState("")
  let [amount, newamount] = useState("")
  let [pending, newpending] = useState("")
  let [total, newtotal] = useState("")
  let [earlier, newearlier] = useState("")






  const addbill = () => {

    fetch('http://localhost:3000/bill/addbill', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        date,
        sender: sender,
        receiver: receiver,
        amount: amount,
        pending_amount: pending,
        total_amount: total,
        earlier_adjustment: earlier
      })

    }).then(() => {
      alert("Bill added successfully")
      newdate("")
      newamount("")
      newsender("")
      newreciever("")
      newpending("")
      newearlier("")
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
            <Form.Label style={{ color:'blue',fontSize:'large',marginRight:'10px'}} >Sender</Form.Label>
            <div className='inp'>
            <input  value={sender} onChange={(e) => newsender(e.target.value)} />
            </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" >
          <div className='enterarea'>
            <Form.Label style={{ color:'blue',fontSize:'large',marginRight:'10px'}} >Reciever</Form.Label>
            <div className='inp'>
            <input  value={receiver} onChange={(e) => newreciever(e.target.value)} />
            </div>
            </div>

          </Form.Group>
          <Form.Group className="mb-3" >
          <div className='enterarea'>
            <Form.Label style={{ color:'blue',fontSize:'large',marginRight:'10px'}} >Amount</Form.Label>
            <div className='inp'>
            <input  value={amount} onChange={(e) => newamount(e.target.value)} />
            </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3" >
          <div className='enterarea'>
            <Form.Label style={{ color:'blue',fontSize:'large',marginRight:'10px'}} >Pending Amount</Form.Label>
            <div className='inp'>
            <input  value={pending} onChange={(e) => newpending(e.target.value)} />
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
          <Form.Group className="mb-3" >
          <div className='enterarea'>
            <Form.Label style={{ color:'blue',fontSize:'large',marginRight:'10px'}} >Ajdustment</Form.Label>
            <div className='inp'>
            <input value={earlier} onChange={(e) => newearlier(e.target.value)} />
            </div>
            </div>

          </Form.Group>
          <Button variant="primary" onClick={() => { addbill(); }}>
            Submit
          </Button>
      </Form>

    </Card>






    {/* <Card border='primary' className="p-3 mb-2 bg-secondary text-white ">
        <div className='enterarea' >
            <input value={date} className="border border-danger" onChange={(e)=>newdate(e.target.value)} placeholder='Date'/>
            <input value={sender} className="border border-danger" onChange={(e)=>newsender(e.target.value)} placeholder='Sender'/>
            <input value={receiver} className="border border-danger" onChange={(e)=>newreciever(e.target.value)} placeholder='Reciever'/>
            <input value={amount} className="border border-danger" onChange={(e)=>newamount(e.target.value)} placeholder='Amount'/>
            <input value={pending} className="border border-danger" onChange={(e)=>newpending(e.target.value)} placeholder='Pending Amount'/>
            <input value={total} className="border border-danger" onChange={(e)=>newtotal(e.target.value)} placeholder='Total Amount'/>
            <input value={earlier} className="border border-danger" onChange={(e)=>newearlier(e.target.value)} placeholder='Earlier Adjustment'/>
        </div>
        <button className='But' onClick={()=>{addbill();}}  >Add Bill</button>
        </Card> */}
  </div>

}

export default Addbill