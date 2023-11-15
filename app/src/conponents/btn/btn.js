import React from 'react';

function Btn({ btnText }) {

    const btnStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        //height: '100vh',

    }

    return (
        
        <button style={btnStyle} >{btnText}</button>
    )
}

export default Btn;
