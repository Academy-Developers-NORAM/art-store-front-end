import {Card} from 'react-bootstrap'

function Footer() {
    return (
        <Card.Footer className="text-center fixed-bottom" style={{background:"light"}}>

            <div className="text-center p-3">
                <p><strong>Academy Art Store</strong></p>
                <a href=" " ><strong>Contact Us</strong> </a>
            </div>

        </Card.Footer>
    );
  }
  
  export default Footer;
