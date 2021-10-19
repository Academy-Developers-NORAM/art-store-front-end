import { Card} from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Card.Footer className="text-center fixed" style={{background:"#edf2f5"}}>

                <div className="text-center p-3">
                    <p><strong>Academy Art Store</strong></p>
                    <a href="/contact" ><strong>Contact Us</strong> </a>
                </div>
            </Card.Footer>
        </footer>
    );
  }
  
  export default Footer;
