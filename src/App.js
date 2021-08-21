//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#021e48';
      showAlert("Dark Mode enabled","success")

    }else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode enabled","success")
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="Yusuf Don" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      {/* <Navbar />*/}
      <div className="container my-3">
      {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyse" mode={mode} />
          {/* </Route>
        </Switch> */}
        {/* <About /> */}
      </div>
      {/* </Router> */}
    </>
    )
}

export default App;
