import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
const baseUrl = 'http://localhost:3001/api/persons'

axios.get(baseUrl).then(response => {
    const persons = response.data
    console.log(persons)
    ReactDOM.render(
        <App persons={persons} />,
        document.getElementById('root')
    )
})