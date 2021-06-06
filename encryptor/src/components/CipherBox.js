import React, { useContext, useState } from 'react';
import {OriginalTextContext, AlteredTextContext} from './Context/TextContext';
import Cipher from './Cipher';
import { URLObjectContext } from './Context/URLObjectContext';

function CipherBox() 
{
    const {originalText} = useContext(OriginalTextContext);
    const {setAlteredText} = useContext(AlteredTextContext);
    const {URLObject} = useContext(URLObjectContext)
    const [IDs, setIDs] = useState([1]);

    function resolveURL() {
        return `/stack/${Object.values(URLObject).join("-")}`;
    }

    const sendText = () => {
        const URL = resolveURL();
        fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: originalText })
        })
        .then(response => response.json())
        .then(text => setAlteredText(text));
    };

    const addCipher = () => {
        const newID = IDs[IDs.length - 1] + 1
        setIDs([...IDs, newID])
    };

    return (
        <div>
            <div>
                {IDs.map(id => {
                    return (
                        <div key={id}>
                            <Cipher id={id} IDProp={{IDs, setIDs}}/>
                        </div>
                    )
                })}
            </div>
            <div className="flex justify-center text-xl py-4">
                <button 
                    className="mx-4 px-2 border-2 rounded-xl border-blue-500 bg-blue-200 outline-none" 
                    onClick={addCipher}
                >
                    Add Cipher
                </button>
                <button 
                    className="mx-4 px-2 border-2 rounded-xl border-blue-500 bg-blue-200 outline-none" 
                    onClick={sendText}
                >
                    Convert
                </button>
            </div>
        </div>
    );
}

export default CipherBox;