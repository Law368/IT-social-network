import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';




function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header /> 
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/> */}
        
        <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
        <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
        <Route path='/news' render={() => <News />}/>
        <Route path='/music' render={() => <Music />}/>
        <Route path='/settings' render={() => <Settings />}/>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
