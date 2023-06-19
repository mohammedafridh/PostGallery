import Homepage from '../pages/Homepage';
import MyPosts from '../pages/MyPosts';
import Profile from '../pages/Profile';
import Login from '../pages/authentication/Login';
import Signup from '../pages/authentication/Signup';
import './App.css';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">

      <div className="pages">
      <Routes>
        <Route path = '/home' element = {<Homepage />}/>
        <Route path = '/myPosts' element = {<MyPosts />}/>
        <Route path = '/profile' element = {<Profile />}/>
        <Route path = '/' element = {<Login />}/>
        <Route path = '/signup' element = {<Signup />}/>
      </Routes>
      </div>
    </div>

  );
}

export default App;
