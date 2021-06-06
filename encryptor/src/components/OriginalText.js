import React, { useContext } from 'react';
import {OriginalTextContext} from './Context/TextContext';

function OriginalText() 
{
    const {originalText, setOriginalText} = useContext(OriginalTextContext);
    const textChangeHandler = (event) => { setOriginalText(event.target.value) };

    return (
        <div className="py-6 h-1/4 block mx-auto xl:w-1/2 lg:w-3/4">
            <textarea 
                placeholder='Write Something' 
                value={originalText} 
                onChange={textChangeHandler}
                className="text-2xl border-2 rounded-xl border-blue-400 rounded outline-none w-2/3 min-h-full resize-none">
            </textarea>
        </div>
    )
}

export default OriginalText;