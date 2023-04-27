import './App.css';
import { Navbar, Header, Main, Footer, Reservations } from './components';
import ScrollAnimation from 'react-animate-on-scroll';
import {Routes, Route, BrowserRouter } from "react-router-dom";
import Test from './Test';
function App() {
  return (
    <BrowserRouter>
      <>
      
          <Navbar />
          <Routes>
            <Route path='/' element ={ <Main />} />
             <Route path='/Reservations' element={<Reservations />} />
          </Routes>
          <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
