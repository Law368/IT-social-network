import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "Do not worry", likesCount: 777 },
  { id: 2, message: "Keep working hard", likesCount: 333 },
  { id: 3, message: "Do it all", likesCount: 444 },
  { id: 4, message: "In due time", likesCount: 888 },
]

let dialogs = [
  { id: 1, name: "Iroh" },
  { id: 2, name: "Bang" },
  { id: 3, name: "Snow" },
  { id: 4, name: "Cloud" },
  { id: 5, name: "Tide" },
]

let messages = [
  { id: 1, message: "Study" },
  { id: 2, message: "for" },
  { id: 3, message: "the" },
  { id: 4, message: "Future" },
  { id: 5, message: "of yours" },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
