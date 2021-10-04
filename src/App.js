import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import { Container } from 'react-bootstrap';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
           <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
