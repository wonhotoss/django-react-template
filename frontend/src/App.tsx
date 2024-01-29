import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [msg, setMsg] = useState('not yet');

    useEffect(() => {        
        (async() => {
            const response = await fetch('http://localhost:8000/api/hello');
            const json = await response.json();
            setMsg(json['message']);
        })();
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {msg}
            </header>
        </div>
    );
}

export default App;
