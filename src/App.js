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
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


function App({ signOut }) {
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
      <View className="App">
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
      <Footer />
    </>
  );
}

export default withAuthenticator(App);
