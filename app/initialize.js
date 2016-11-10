import ReactDom from 'react-dom'
import React from 'react'
import App from 'components/app'

import {createStore, compose, applyMiddleware} from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'

const store = createStore(
    reducers,
    {}
);

ReactDom.render(<Provider store={store}><App/></Provider>, document.querySelector('#app'));