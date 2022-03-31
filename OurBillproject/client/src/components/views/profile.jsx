import react, { useEffect, useState } from 'react'
import reactdom from 'react-dom'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button, Card ,Modal} from 'react-bootstrap';
import axios from 'axios';
import Mod from '../views/modal'
import Eform from '../views/editform'


function Profile() {
  const navigate = useNavigate();
  const info = localStorage.getItem("userinfo")
  const newdata = JSON.parse(info)
  var token = newdata.data.Token
  const [name, newname] = useState(null)
  const [Nickname, newnick] = useState(null)
  const [numbe, newnumber] = useState(null)
  const [img, image] = useState(null)
  const [uploadimg, uploadnewimg] = useState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var number = newdata.data.number
  var id = newdata.data._id
  console.log(newdata.data)

  useEffect(() => {
    fetch(`http://localhost:3000/user/viewdetails/${number}`, {
      method: 'GET',
      headers: {
        "Authorization": "Bearer " + token,
        'Content-Type': 'application/json',
      }


    })
      .then(res => res.json())
      .then((data) => {
        newname(data.data.Name)
        newnick(data.data.Nickname)
        newnumber(data.data.Number)
      })
      .then(fetch(`http://localhost:3000/user/viewphoto/${number}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'image/jpeg',
        }
      })
        .then((data) => {
          image(data.url)
          console.log(data.url)
        })


      )



  }, [])

  // function upimg() {

// console.log(uploadimg)
// // const pathArray = uploadimg.split('\\').pop().split('/').pop();
// // console.log(pathArray,typeof(pathArray))

// let imageFormObj = new FormData();
//     imageFormObj.append("image", uploadimg);

// axios.post(`http://localhost:3000/user/uploadfile`, imageFormObj)
      
      


////////////////////////////////////////////////////////////////

// fetch('http://localhost:3000/user/uploadfile', { 
//   method: 'POST',
//   // headers: {
//   //   //"Content-Disposition": "attachment; name='file'; filename='xml2.txt'",
//   //   "Content-Type": "multipart/form-data " //"multipart/mixed;boundary=gc0p4Jq0M2Yt08jU534c0p" //  ή // multipart/form-data 
//   // },
//   headers: 
//   { 
//     'cache-control': 'no-cache',
//     'content-type': 'multipart/form-data;' },
//  formData: uploadimg
  


//   //body: uploadimg // This is your file object
// })


  //     .then((data) => {
  //       console.log(data)


  //     })

  // }






  const logout = () => {
    localStorage.removeItem("userinfo")
    alert("successfully logged out,login again ")
    navigate("/Login")
  }
  return <div>


    <Card style={{ width: '30rem', marginTop: '1rem' }} >
      <Card.Title style={{ textAlign: 'center', fontFamily: 'initial', textDecoration: 'underline', color: 'blue', fontSize: 'large' }}>Profile</Card.Title>
      <Card.Img src={img} style={{ textAlign: 'right', height: '80px', width: '70px', border: '5px', borderColor: 'blue', borderRadius: '40px' }} />

      <Card.Text style={{ textAlign: 'left', fontFamily: 'cursive', color: 'blue', fontSize: 'large' }} >Name:{name}</Card.Text>
      <Card.Text style={{ textAlign: 'left', fontFamily: 'cursive', color: 'blue', fontSize: 'large' }}>Nick-name:{Nickname}</Card.Text>
      <Card.Text style={{ textAlign: 'left', fontFamily: 'cursive', color: 'blue', fontSize: 'large' }}> Number:{numbe}</Card.Text>
      <Card.Text ><Button variant="primary" type="submit" onClick={logout}> Logout</Button></Card.Text>
      {/* <Card.Text>Upload/change Profile picture<input type="file" value={null} onChange={(e) => { uploadnewimg(e.target.files[0]) }} /></Card.Text> */}
      <Card.Text ><Button variant="primary" type="submit"  onClick={handleShow} >Edit Profile</Button></Card.Text>
    </Card>

    <div style={{ width: '70rem', marginTop: '10rem' ,backgroundColor:'black'}}>

    
      
    </div>
    <Modal show={show} onHide={handleClose} animation={false} style={{opacity:1}}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body><Eform/> </Modal.Body>
        
      </Modal>

  </div>





}
export default Profile