import React, { useContext, useState } from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody, 
  ModalCloseButton,Input,Button,FormLabel,useDisclosure,FormControl,Heading
} from '@chakra-ui/react'
import { AuthContext } from "../context/AuthContext"



function Login() {

  const {auth,setAuth,login,logout,setName,name} = useContext(AuthContext)

  const [form,setForm] = useState({
    // 
    // 
    email:"eve.holt@reqres.in",
    password:"cityslicka",
    name: ""
})

const handleOnChange = (e)=> {
    const {name,value} = e.target

    setForm({
        ...form,
        [name]:value
    })
}
   
const handleOnSubmit = (e)=> {
  e.preventDefault();
  //alert(form.name)
  if(form.email == "" || form.email != "eve.holt@reqres.in"){
      alert("Please Enter Correct Email")
  } else if(form.password == "" || form.password != "cityslicka"){
      alert("Please Enter Correct Password")
  } else if(form.name == ""){
      alert("Please Enter Name")
  } else if(form.email != "" && form.password != "" && form.name != ""){
      fetch("https://reqres.in/api/login",{
          method:"POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(form)
      }).catch((err)=> alert("Details Not matched"))
      .finally(()=> {
          login();
          setName(form.name)
          alert(`congratulation!! Mr.${form.name} You are Succesfully Logged in`)
         
      })
 }
 }




  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button bgColor="#ff9400" color="white"  onClick={onOpen}>{name? name : "Login"}</Button>
     
      <Modal 
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent  w="70%">
          <ModalHeader fontSize={{
            base: "14px",
            sm: "14px",
            md: "17px",
            lg: "20px",
            xl: "22px"
          }}>Login</ModalHeader>
          <ModalCloseButton />
          <Heading as="h1" ml="10%" fontSize={{
            base: "14px",
            sm: "14px",
            md: "17px",
            lg: "20px",
            xl: "22px"
          }} >{auth? "Your Login Details:-" : null}</Heading> <br />
         <form onSubmit={handleOnSubmit} >
          <Heading as="h1" ml="10%" fontSize={{
            base: "14px",
            sm: "14px",
            md: "17px",
            lg: "20px",
            xl: "22px"
          }} >Enter Name</Heading> <br />
          <Input
           w="70%"
            m="auto"
             ml="10%"
             type="text"
             placeholder="Enter Your Name"
             name="name"
             value={form.name}
             onChange={handleOnChange}
             /> <br /> <br />

<Heading as="h1" ml="10%" fontSize={{
            base: "14px",
            sm: "14px",
            md: "17px",
            lg: "20px",
            xl: "22px"
          }} >Enter Email</Heading> <br />
          <Input
           w="70%"
            m="auto"
             ml="10%"
             type="email"
             placeholder="Enter Your Email"
             name="email"
             value={form.email}
             onChange={handleOnChange}
             /> <br /> <br />
             <Heading as="h1" ml="10%" fontSize={{
            base: "14px",
            sm: "14px",
            md: "17px",
            lg: "20px",
            xl: "22px"
          }} >Enter Password</Heading> <br />
          <Input
           w="70%"
            m="auto"
             ml="10%"
             type="password"
             placeholder="Enter Your Password"
             name="password"
             value={form.password}
             onChange={handleOnChange}
             /> <br /> <br />



             {!auth? <Input type="submit" value="Login" w="30%" m="auto" ml="20%" bgColor="#3182ce" color="white"/> 
             
            :
            <Button  w="30%" m="auto" ml="20%" bgColor="#3182ce" color="white"
            onClick={logout}
            >Logout</Button>
            }
             <Button  ml="10%" onClick={onClose}>Cancel</Button>
         </form>

        </ModalContent>
      </Modal>
    
    </>
  )
}

export default Login