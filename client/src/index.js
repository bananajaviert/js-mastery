import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'thunk'

import reducers from './reducers/index.js'

import App from './App.jsx'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store='store'>
        <App/>
    </Provider>,
    document.getElementById('root')
)