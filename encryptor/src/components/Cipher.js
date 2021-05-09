import React, { useState, useEffect, useContext } from 'react';
import CipherList from './CiphersList';
import {URLObjectContext} from './Context/URLObjectContext';

function Cipher(props) 
{
    const [mode, setMode] = useState('encrypt');
    const [cipher, setCipher] = useState('rot13');
    const {URLObject, setURLObject} = useContext(URLObjectContext)

    const toggleEncrypt = () => { if(mode === 'decrypt') setMode('encrypt') };
    const toggleDecrypt = () => { if(mode === 'encrypt') setMode('decrypt') };

    useEffect(() => {
        var objectCopy = URLObject;
        objectCopy[props.id] = `${mode[0]}${cipher}`;

        setURLObject(objectCopy)
    }, [cipher, mode, props.id, URLObject, setURLObject]);

    const removeCipher = () => {
        var objectCopy = URLObject;
        delete objectCopy[props.id];
        setURLObject(objectCopy)

        const filtered = props.IDProp.IDs.filter((value, index, arr) => { 
            return value !== props.id;
        });

        props.IDProp.setIDs(filtered)
    };

    return (
    <div className="pb-4">
        <ul className="flex justify-center text-xl font-medium">
            <li className="px-4 mx-4">
                <div 
                    onClick={toggleEncrypt}
                    className={mode === 'encrypt'? "text-green-600" : "text-green-400"}
                >
                    Encrypt
                </div>
            </li>
            <li className="px-4 mx-4">
                <div
                    onClick={toggleDecrypt}
                    className={mode === 'decrypt'? "text-green-600" : "text-green-400"}
                >
                    Decrypt
                </div>
            </li>
        </ul>
        <div className="flex justify-center text-xl font-xl my-2">
            <CipherList setCipher={setCipher} />
            <button 
                className="ml-6 px-4 border-2 rounded-xl border-pink-500 bg-pink-200" 
                onClick={removeCipher} 
                disabled={props.IDProp.IDs.length === 1}
            >
                Remove
            </button>
        </div>
    </div>
    );
}

export default Cipher;