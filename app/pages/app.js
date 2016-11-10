import React from 'react'
import {RelativeFragment, Fragment} from "redux-little-router"

import Welcome from './welcome'
import Deck from './deck'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Fragment forRoutes={["/", "/welcome"]}>
                    <Welcome />
                </Fragment>

                <Fragment forRoutes={["/deck"]}>
                    <Deck />
                </Fragment>
            </div>
        )
    }
}
