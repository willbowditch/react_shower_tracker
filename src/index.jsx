import React from 'react'
import { hydrate } from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'


hydrate(
    <App />,
    document.querySelector('#app')
)
