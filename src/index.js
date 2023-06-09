import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Bs from './App';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);
const App = () => {
  return (
    <div>
      <Bs />
    </div>
  );
}
root.render(<App />);