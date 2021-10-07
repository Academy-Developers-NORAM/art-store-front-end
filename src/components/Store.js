import { Container, Card, Button } from 'react-bootstrap';
import firstPic from '../../src/images/SK-A-91.jpg';
import secondPic from '../images/SK-A-358.jpg';
import thirdPic from '../images/SK-A-1595.jpg';
import fourthPic from '../images/SK-A-2344.jpg';



function Store() {
     let products = [
         {id: 1, title: 'First', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: `${firstPic}`, inStock: true},
         {id: 2, title: 'Second', price: 12.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: `${secondPic}`, inStock: false},
         {id: 3, title: 'Third', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: `${thirdPic}`, inStock: true},
         {id: 4, title: 'Fourth', price: 37.99, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.' , image: `${fourthPic}`, inStock: false},
    ];


    return (
        <Container fluid>
        {products.map(product =>(
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    {product.inStock ? <Button variant="primary">Buy</Button> : ''}
                </Card.Body>
            </Card>
        ))}
        </Container>
    );
  }
  
  export default Store;
