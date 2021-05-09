import React, { useContext } from 'react';
import {AlteredTextContext} from './Context/TextContext';

function AlteredText() 
{
    const {alteredText} = useContext(AlteredTextContext);
    return (
        <div className="py-6">
            <textarea 
                placeholder='Result text' 
                value={alteredText} 
                className="text-2xl border-2 rounded-xl border-blue-400">
            </textarea>
        </div>
    )
}

export default AlteredText;