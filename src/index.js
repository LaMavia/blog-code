import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
window.addEventListener('DOMContentLoaded', (e) => {
  ReactDOM.hydrate(<App/>, document.getElementById('root'),() => {
    console.log('Rendering....')
  })
}, true)
