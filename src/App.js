import './App.css';
import { useState, useEffect, React } from 'react';
import { Navbar, Header, Main, Footer, Reservations } from './components';
import {Routes, Route, useLocation  } from "react-router-dom";
import { headerData, reservationData } from './constants';
import DataContext from './DataContext';

function App() {
// use state to set data
// use effect to get path
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  // set path name on route change
  useEffect(()=> {
    setPath(location.pathname);
  }, [location.pathname]);

  // const p = location.pathname;
  // console.log(p);
    // Send data to header to based on route
    let data = {};
    if(path === '/' || path === '/Little-Lemon') {

      data = headerData;
      // console.log(data);

    } else if (path === '/Reservations') {

      data = reservationData;
      // console.log(data);

    } else if (path === '/OrderOnline') {

      console.log("Path not setup!");

    }

    
  return (
      <>
      
          <Navbar />
            <DataContext.Provider value={data}>
                <Routes>
                  <Route path='/Little-Lemon' element ={ 
                    <>

                      <Header />
                      <Main />


                    </>
                  } />                  
                  <Route path='/' element ={ 
                    <>

                      <Header />
                      <Main />


                    </>
                  } />
                  <Route path='/Reservations' element={
                    <>

                      <Header />
                      <Reservations />

                        
                    </>
                  } />
                </Routes>
            </DataContext.Provider>
          <Footer />

      </>
  );
}

export default App;
