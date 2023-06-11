import './App.css';
import MainNavigation from './navigation/MainNavigation';
import { Route,Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="app">
      <MainNavigation />

      <div className="pages">
      <Routes>
        <Route path = '/' element = {<Homepage />}/>
      </Routes>
      </div>
    </div>

  );
}

export default App;
