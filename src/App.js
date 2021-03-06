import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Store from './components/Store';
import Contact from './components/Contact';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
    <Header />
      <main>
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/store' component={Store} />
          <Route path='/contact' component={Contact}/>
        </Container>
      </main>
      <Footer />
    </Router>
    </>
  );
}

export default App;
