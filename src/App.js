import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Opportunities from './components/opportunities';
import Signup from './components/signup';
import Login from './components/login';
import Footer from './components/footer';
import Contact from './components/contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
