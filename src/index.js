import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hi, How are you', likesCount: 12},
  {id: 2, message: 'First post', likesCount: 11},
  {id: 3, message: '111', likesCount: 20},
  {id: 4, message: '2222', likesCount: 35},
  {id: 5, message: '3333', likesCount: 33},
  {id: 6, message: '44444', likesCount: 27}
]

let dialogs = [
  {id: 1, name: 'User 1'},
  {id: 2, name: 'User 2'},
  {id: 3, name: 'User 3'},
  {id: 4, name: 'User 4'},
  {id: 5, name: 'User 5'},
  {id: 6, name: 'User 6'}
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'Test'},
  {id: 3, message: '111'},
  {id: 4, message: '2222'},
  {id: 5, message: '3333'},
  {id: 6, message: '44444'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
