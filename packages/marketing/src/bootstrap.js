import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    )
}

if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    console.log(process.env.NODE_ENV)
    
    if(devRoot) {
        console.log(process.env.NODE_ENV)
        mount(devRoot)
    }
}

export {mount}