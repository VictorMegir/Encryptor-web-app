import React, { useContext } from 'react';
import {AlteredTextContext} from './Context/TextContext';

function AlteredText() 
{
    const {alteredText} = useContext(AlteredTextContext);
    return (
        <div className="py-6 h-1/4 block mx-auto xl:w-1/2 lg:w-3/4">
            <textarea readOnly
                placeholder='Result text' 
                value={alteredText} 
                className="text-2xl border-2 rounded-xl border-blue-400 outline-none w-2/3 min-h-full">
            </textarea>
        </div>
    )
}

export default AlteredText;