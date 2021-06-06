import React, { useState, useEffect } from 'react';

function CipherList(props)
{
    const [allCiphers, setAllCiphers] = useState([]);
    const selectCipher = (event) => { props.setCipher(event.target.value) };

    useEffect(() => {
        fetch('/ciphers')
        .then(response => response.json())
        .then(text => {setAllCiphers(text); console.log(text)});
    },[]);

    return (
        <select name="ciphers" id="ciphers" onChange={selectCipher}>
            {allCiphers.map((item, index) =>
                <option value={item} key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>
            )}
        </select>
    );
}

export default CipherList;