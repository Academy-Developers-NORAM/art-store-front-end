import {Form,Button} from 'react-bootstrap';
import {BsFillEnvelopeFill} from "react-icons/bs";


function Contact() {
    const submitHandler = (e) => {
        e.preventDefault();
        
        alert("Message was sent");
    }
    return (
        <div>
            <h1>Contact Us</h1>
            <br/>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>      
                <br/>
                <Button variant="success" type="submit" ><BsFillEnvelopeFill/> Send Message</Button>
            </Form>
        </div>
 
    );
  }
  
  export default Contact;
