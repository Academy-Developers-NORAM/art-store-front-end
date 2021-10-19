import { Container, Row, Card } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';


function Store() {
     let products = [
         {id: 1, title: 'First', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: '/images/SK-A-91.jpg', inStock: true},
         {id: 2, title: 'Second', price: 12.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: '/images/SK-A-91.jpg', inStock: false},
         {id: 3, title: 'Third', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: '/images/SK-A-91.jpg', inStock: true},
         {id: 4, title: 'Fourth', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: '/images/SK-A-91.jpg', inStock: false},
         {id: 5, title: 'Fifth', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: '/images/SK-A-91.jpg', inStock: false},
         {id: 6, title: 'Sixth', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: '/images/SK-A-91.jpg', inStock: true},
         {id: 7, title: 'Seventh', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: '/images/SK-A-91.jpg', inStock: true},
         {id: 8, title: 'Eight', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: '/images/SK-A-91.jpg', inStock: false},
         {id: 9, title: 'Ninth', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: '/images/SK-A-91.jpg', inStock: true},
    ];


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
        <Container>
            <Row>
            {products.map(product =>(
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        {product.inStock ? <Button variant="success" onClick={handleShow}>Buy</Button> : <Button variant="secondary">Out of stock</Button>}
                    </Card.Body>
                </Card>
            ))}
            </Row>
        </Container>

        <Modal show = {show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Purchase complete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Would you like to continue shopping or checkout?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Continue Shopping
                </Button>
                <Button variant="primary" onClick={handleClose}>Go to checkout
                </Button>
            </Modal.Footer>
        </Modal>

        </div>
    );
  }

  
  
  export default Store;
