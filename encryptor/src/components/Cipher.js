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
    <>
        <CipherList setCipher={setCipher} />
        <ul>
            <li><div onClick={toggleEncrypt}>Encrypt</div></li>
            <li><div onClick={toggleDecrypt}>Decrypt</div></li>
        </ul>
        <button onClick={removeCipher} disabled={props.IDProp.IDs.length === 1}>Remove</button>
    </>
    );
}

export default Cipher;