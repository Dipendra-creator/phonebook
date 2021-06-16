import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const persons = [
    {
        id: 1,
        name: 'Dipendra Bhardwaj',
        number: '8433220261'
    },
    {
        id: 2,
        name: 'Ayush',
        number: '9512685200'
    },
    {
        id: 3,
        name: 'Aditya',
        number: '8965425874'
    }
]

ReactDOM.render(
    <App persons={persons}/>,
    document.getElementById('root')
);
