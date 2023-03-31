import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import StartingPage from './Pages/StartPage/StartingPage';
import './App.css'
import MainHome from './Pages/Home/MainHome';
import MainWorkout from './Pages/MainWorkout/MainWorkout';
import Stretch from './Pages/Workout Section/Stretches/Main/Stretch';
import StretchDetail from './Pages/Workout Section/Stretches/Sub/StretchDetail';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<StartingPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/home' element={<MainHome/>}/>
          <Route path='/home-workout' element={<MainWorkout/>}/>
          <Route path='/stretch-workout' element={<Stretch/>}/>
          <Route path='/stretch/:id' element={<StretchDetail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
