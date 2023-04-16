import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import StartingPage from './Pages/StartPage/StartingPage';
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainHome from './Pages/Home/MainHome';
import MainWorkout from './Pages/MainWorkout/MainWorkout';
import Stretch from './Pages/Workout Section/Stretches/Main/Stretch';
import StretchDetail from './Pages/Workout Section/Stretches/Sub/StretchDetail';
import WorkoutMain from './Pages/Workout Section/Workout/Main/WorkoutMain';
import WorkoutDesc from './Pages/Workout Section/Workout/Desc/WorkoutDesc';
import YogaMain from './Pages/Workout Section/Yoga/YogaMain';
import YogaDesc from './Pages/Workout Section/Yoga/Desc/YogaDesc'
import DietMain from './Pages/Diets/Main/DietMain';
import FatLMain from './Pages/Diets/FatLoss/Main/FatLMain';
import WeightGain from './Pages/Diets/WeightGain/Main/WeightGain';
import KetoMain from './Pages/Diets/Keto/KetoMain';
import BlogMain from './Pages/Blog/Main/BlogMain';
import BlogDesc from './Pages/Blog/Desc/BlogDesc';
import ProfileMain from './Pages/Profile/Main/ProfileMain';

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
          <Route path='/workout-main' element={<WorkoutMain/>}/>
          <Route path='/workout-desc/:id' element={<WorkoutDesc/>}/>
          <Route path='/yoga-main' element={<YogaMain/>}/>
          <Route path='/yoga-desc/:id' element={<YogaDesc/>}/>
          <Route path='/dietmain-section' element={<DietMain/>}/>
          <Route path='/fatloss-section' element={<FatLMain/>}/>
          <Route path='/weight-gain' element={<WeightGain/>}/>
          <Route path='/keto-main' element={<KetoMain/>}/>
          <Route path='/main-blog' element={<BlogMain/>}/>
          <Route path='/blog-desc' element={<BlogDesc/>}/>
          <Route path='/profile' element={<ProfileMain/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
