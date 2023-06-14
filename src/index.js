import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Home from './App'

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
}
root.render(<App />);