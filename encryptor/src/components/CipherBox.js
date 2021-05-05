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
        console.log(URL)
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
        <>
            <div>
                {IDs.map(id => {
                    return (
                        <div key={id}>
                            <Cipher id={id} IDProp={{IDs, setIDs}}/>
                        </div>
                    )
                })}
            </div>
            <button onClick={sendText}>Convert</button>
            <button onClick={addCipher}>Add Cipher</button>
        </>
    );
}

export default CipherBox;