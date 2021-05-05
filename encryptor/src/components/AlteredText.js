import React, { useContext } from 'react';
import {AlteredTextContext} from './Context/TextContext';

function AlteredText() 
{
    const {alteredText} = useContext(AlteredTextContext);
    return ( <div>{alteredText}</div> )
}

export default AlteredText;