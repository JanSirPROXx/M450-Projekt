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

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        },
        title: {
            color: '#333',
            marginBottom: '50px',
            fontFamily: '"Roboto", sans-serif',
        },
        button: {
            margin: '10px',
            padding: '15px 30px',
            fontSize: '16px',
            color: '#fff',
            backgroundColor: '#007BFF',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Umfragenapplikation by Jan</h1>
            <button style={styles.button} onClick={create}>{'Umfrage Erstellen'}</button>
            <button style={styles.button} onClick={meineUmfragen}>{'Meine Umfragen'}</button>

        </div>
    )
}


