import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';

function App() {
  return (
    <div className='app-wrapper'>
      <Header /> 
      <Navbar />
      {/* <Profile /> */}
      <div className='app-wrapper-content'>
      <Dialogs />
      </div>
    </div>
  );
}

export default App;
