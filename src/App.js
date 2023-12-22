import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom"; 

function App() {
  const [DefMode,SetDarkMode] = useState('light')
  const [alert,setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1300)
  }

  const changeMode=()=>{
    if(DefMode === 'light'){
      SetDarkMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark Mode is Enabled","success")
    }else{
      SetDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled","success")
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={DefMode} changeMode ={changeMode}/>
      <div className="container my-3">
        <Alert alert = {alert} showAlert = {showAlert}/>
      </div>
      
      <div className="container my-3">
          <Routes>
          {/* always use exact */}
            <Route exact path="/about" element={<About mode={DefMode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm heading = "Enter the text to analyze below" mode={DefMode} showAlert = {showAlert}/>}>
            </Route>
          </Routes>
        </div>
      </Router>

    </> 
  );
}

export default App;
