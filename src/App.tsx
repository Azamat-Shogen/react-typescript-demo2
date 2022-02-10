import React from 'react';
import './App.css';
import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import {ThemeContextProvider} from "./components/context/ThemeContext"
import Box from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/User';
import MutableRef from './components/ref/MutableRef';



function App() {
  return (
    <div className="App">
      {/* <LoggedIn /> */}

      {/* ---- new lesson ---- */}
      {/* <Counter /> */}

       {/* ---- new lesson ---- */}
       {/* <ThemeContextProvider>
          <Box />
       </ThemeContextProvider> */}

        {/* ---- new lesson ---- */}
        {/* <UserContextProvider>
          <User />
        </UserContextProvider> */}

         {/* ---- new lesson ---- */}
        <MutableRef />
     
    </div>
  );
}

export default App;
