import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://cdn.shopify.com/shopifycloud/hatchful-web/assets/67cbe9b74baf7f893488c5fc426d31eb.png"/>
      </header>
      <nav className='nav'>
        <div><a>Profile</a></div>
        <div><a>Messages</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className='content'>
        <div>
        <img src='https://www.hydro.com/globalassets/08-about-hydro/hydro-worldwide/singapore.jpg?quality=85&width=1036&height=440&mode=crop&center=0.5,0.5' />
        </div>
        <div>
          <img src='https://i.imgur.com/rSofPqQ.jpg' />
          ava + description
        </div>
        <div>
            My posts
            <div>
              New post
            </div>
        </div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
       </div>
    </div>
  );
}

export default App;
