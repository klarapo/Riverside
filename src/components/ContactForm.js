import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {db} from '../firebase'
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const ContactForm = () => {
    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[message,setMessage] = useState();
    
    const userCollectionRef = collection(db,"contactdata")

    const handleSubmit = () => {
        addDoc(userCollectionRef,{
            name: name,
            email: email,
            message: message
        }).then(()=>{
            if(!alert("Uspješno poslano!")) document.location = 'https://stellar-centaur-7ecf0b.netlify.app/contact'
        }).catch((error)=>{
            alert(error.message)
        })
    }

    return (
        <Form className="contact">
            <Form.Group className="mb-3 contactform" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Full name" 
                onChange={(event)=>{
                    setName(event.target.value)
                }}/><br />
            </Form.Group>
           
            <Form.Group className="mb-3 contactform" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="name@example.com" 
                onChange={(event)=>{
                    setEmail(event.target.value)
                }}/><br />
            </Form.Group>

            <Form.Group className="mb-3 contactform" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} 
                onChange={(event)=>{
                    setMessage(event.target.value)
                }}/><br /> 
            </Form.Group>
            <Button className="contactform" onClick={handleSubmit}>Query</Button>
        </Form>
  );
}

export default ContactForm
