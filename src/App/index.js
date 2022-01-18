import React from 'react';
import { TareaProvider } from '../TareaContext';
import {AppUI} from './AppUi';
import './App.css';


function App() {
  

  return (
    <TareaProvider>
      <AppUI />
    </TareaProvider>

  );
}

export default App;
