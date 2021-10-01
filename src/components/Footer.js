
function Footer() {
    return (
        <footer className="text-center text-white fixed-bottom" style={{background:"light"}}>

            <div className="text-center p-3" style={{background: "rgba(0, 0, 0, 0.2)"}}>
                <p><strong>Academy Art Store</strong></p>
                <a href=" " ><strong>Contact Us</strong> </a>
            </div>

            <div className="text-center p-3" style={{background: "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Copyright:
                <a  className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
        </footer>
    );
  }
  
  export default Footer;
