import React, { useContext } from 'react';
import {OriginalTextContext} from './Context/TextContext';

function OriginalText() 
{
    const {originalText, setOriginalText} = useContext(OriginalTextContext);
    const textChangeHandler = (event) => { setOriginalText(event.target.value) };

    return (
        <textarea 
            rows='15' cols='150' 
            placeholder='Write Something' 
            value={originalText} 
            onChange={textChangeHandler}
            className="text-xl">
        </textarea>
    )
}

export default OriginalText;