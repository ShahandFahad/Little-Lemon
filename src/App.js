import './App.css';
import { Navbar, Header, Main, Footer } from './components';
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
  return (
    <>
        <Navbar />
        <Header />
        <Main />    
        {/* <ScrollAnimation
          animateIn='fadeIn'
          animateOut='fadeOut'
          scrollableParentSelector='#scrolly-div'
        > */}
          <Footer />
        {/* </ScrollAnimation> */}
    </>
  );
}

export default App;
