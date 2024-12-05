import React from 'react';
import './CSS/App.css';
import Test from './Components/TestComponents/Test.jsx';
import Test2 from './Components/TestComponents/Test2.jsx';
import Test3 from './Components/TestComponents/Test3.jsx';
import Navbar from './Components/TestComponents/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main className='flex flex-col gap-5'>
      <div className='nawfal'>Click me</div>

      <button className='transition-all duration-100 border-2 bg-blue-700 hover:bg-red-700 p-3 rounded-2xl md:p-8'>
        Click me
      </button>
    </main>
  );
}

export default App;
