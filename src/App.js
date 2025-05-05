import {useState} from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
const [alert, setAlert] = useState(null);
const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  }) 
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}
const [btnText, setbtnText] = useState('Enable Dark Mode');
const [mode, setMode] = useState('light');
const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    setbtnText('Disable Dark Mode');
    showAlert("Dark mode has been enabled", "success");
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    setbtnText('Enable Dark Mode');
    showAlert("Light mode has been enabled", "success");
  }
}
  return (
    <>
    <Router>
    <Navbar title='TextUtils' aboutText="About" mode={mode} toggleMode={toggleMode} btnText={btnText}/>
    <Alert alert={alert}/>
    <div className = "container my-3">
      <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode} />} />
          <Route path="/about" element={<About />} />
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
