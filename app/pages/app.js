import React from 'react'
import {RelativeFragment, Fragment} from "redux-little-router"

import Welcome from './welcome'
import Deck from './deck'
import Navbar from '../components/navbar'

export default class App extends React.Component {
    render() {
        return (
            <div className="viewport">
                <Navbar />
                <Fragment forRoutes={["/", "/welcome"]}>
                    <Welcome />
                </Fragment>

                <Fragment forRoute='/deck'>
                    <Deck />
                </Fragment>
            </div>

        )
    }
}
