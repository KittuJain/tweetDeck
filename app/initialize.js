import ReactDom from 'react-dom'
import React from 'react'
import App from 'pages/app'

import {createStore, compose, applyMiddleware} from 'redux'
import {routerForBrowser, RouterProvider} from 'redux-little-router'
import reducers from './reducers'
import { Provider } from 'react-redux'
import routes from './routes'

const {
    routerEnhancer,
    routerMiddleware
} = routerForBrowser({routes});

const store = createStore(
    reducers, // All reducers
    {}, // initial state
    compose(
        routerEnhancer, // Redux little router middleware
        applyMiddleware(routerMiddleware) // Redux little router middleware
    )
);

ReactDom.render(
    <Provider store={store}>
        <RouterProvider store={store}>
            <App />
        </RouterProvider>
    </Provider>
    , document.querySelector('#app')
);
