import './App.css';
import React, { useState } from 'react';
import OriginalText from './components/OriginalText';
import CipherBox from './components/CipherBox';
import AlteredText from './components/AlteredText';

import {OriginalTextContext, AlteredTextContext} from './components/Context/TextContext';
import {URLObjectContext} from './components/Context/URLObjectContext';

function App()
{
  const [originalText, setOriginalText] = useState('');
  const [alteredText, setAlteredText] = useState('');
  const [URLObject, setURLObject] = useState({});

  return (
    <div className="App">
      <OriginalTextContext.Provider value={{originalText, setOriginalText}}>
      <AlteredTextContext.Provider value={{alteredText, setAlteredText}}>
      <URLObjectContext.Provider value={{URLObject, setURLObject}}>
        <OriginalText/>
        <CipherBox/>
        <AlteredText/>
      </URLObjectContext.Provider>
      </AlteredTextContext.Provider>
      </OriginalTextContext.Provider>
    </div>
  );
}

export default App;