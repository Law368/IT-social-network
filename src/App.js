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

let posts = [
  {id: 1, message: 'Hi, How are you', likesCount: 12},
  {id: 2, message: 'First post', likesCount: 11},
  {id: 3, message: '111', likesCount: 20},
  {id: 4, message: '2222', likesCount: 35},
  {id: 5, message: '3333', likesCount: 33},
  {id: 6, message: '44444', likesCount: 27}
]


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
        
        <Route path='/dialogs' render={() => <Dialogs />}/>
        <Route path='/profile' render={() => <Profile posts={posts}/>}/>
        <Route path='/news' render={() => <News />}/>
        <Route path='/music' render={() => <Music />}/>
        <Route path='/settings' render={() => <Settings />}/>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
