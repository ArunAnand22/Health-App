import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import StartingPage from './Pages/StartPage/StartingPage';
import './App.css'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<StartingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
