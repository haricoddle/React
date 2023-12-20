import './App.css';
import Head from './components/Home';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
      <Route path='/home' element={<Head />}/>
      <Route path='/' element={<Login />}/>
    </Routes>
    </div>
  );
}

export default App;
