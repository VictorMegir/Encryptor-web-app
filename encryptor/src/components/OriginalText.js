import React, { useContext } from 'react';
import {OriginalTextContext} from './Context/TextContext';

function OriginalText() 
{
    const {originalText, setOriginalText} = useContext(OriginalTextContext);
    const textChangeHandler = (event) => { setOriginalText(event.target.value) };

    return (
        <div className="py-6">
            <textarea 
                placeholder='Write Something' 
                value={originalText} 
                onChange={textChangeHandler}
                className="text-2xl border-2 rounded-xl border-blue-400 rounded">
            </textarea>
        </div>
    )
}

export default OriginalText;