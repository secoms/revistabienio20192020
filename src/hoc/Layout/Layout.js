import React, { Component } from 'react'
import classes from './Layout.module.scss'
class Layout extends Component {

    render() {
        return (
            <div>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout