import './App.css';
import { Route,Routes,Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Homepage from '../pages/Homepage';
import MyPosts from '../pages/MyPosts';
import Profile from '../pages/Profile';
import Login from '../pages/authentication/Login';
import Signup from '../pages/authentication/Signup';
import { useAuthContext } from '../contexts/UserAuthContext';

function App() {

  const{user} = useAuthContext()

  return (
    <div className="app">
      <div className="pages">
      <Toaster />
      <Routes>
        <Route path = '/home' element = {user?<Homepage />:<Navigate to = '/' />}/>
        <Route path = '/myPosts' element = {user?<MyPosts />:<Navigate to = '/' />}/>
        <Route path = '/profile' element = {user?<Profile />:<Navigate to = '/' />}/>
        <Route path = '/' element = {!user?<Login /> : <Navigate to = '/home'/>}/>
        <Route path = '/signup' element = {!user?<Signup />: <Navigate to = '/home'/>}/>
      </Routes>
      </div>
    </div>

  );
}

export default App;
