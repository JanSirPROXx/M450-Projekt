import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function HomeScr() {
    const nav = useNavigate();

    const create = () => {
        nav('/create');
    
    }
    const meineUmfragen = () => {
        //nav('/meineumfragen');
    }

    return (
        <div>
            <h1>Umfragen machen Spass!</h1>
            <button onClick={create}>{'Umfrage Erstellen'}</button>
            <button onClick={meineUmfragen}>{'Meine Umfragen'}</button>

        </div>
    )
}


