import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    componentDidMount() {
        console.log('mount and send query');

        const socket = new WebSocket('ws://localhost');

        socket.onopen = () => {
            console.log('Соединение установлено');
            socket.send('test message');
        };
          
        socket.onclose = (event) => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }
            console.log('Код: ' + event.code + ' причина: ' + event.reason);
        };
          
        socket.onmessage = (event) => {
            console.log('Получены данные ' + event.data);
        };
          
        socket.onerror = (error) => {
            console.log('Ошибка ');
        };
    }

    render() {
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
                </header>
            </div>
        );
    }
}

export default App;