// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          {/* <Route path='' element= {<LandingPage/>}/>
          <Route path='/Gallery' element= {<Gallery/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
