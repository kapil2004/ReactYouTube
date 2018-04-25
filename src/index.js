import React from 'react';
import ReactDOM from 'react-dom';

// create a new component
const App = () => {
  return <div>Hi!</div>;
}

// put component's html into dom
ReactDOM.render(<App />, document.querySelector('.container'));
