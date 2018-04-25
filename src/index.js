import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyCkiEYvBrCb_UyiNz0lKa6v7WGc8jiunrw';

// create a new component
const App = () => {
  return <div>Hi!</div>;
}

// put component's html into dom
ReactDOM.render(<App />, document.querySelector('.container'));
