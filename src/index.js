import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FitnessDataProvider } from './context/fitnessDataContext';

ReactDOM.render(
  <FitnessDataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FitnessDataProvider >,
  document.getElementById('root')
);