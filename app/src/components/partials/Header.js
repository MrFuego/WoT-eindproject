import React, { Component } from 'react'

/* Hier wordt de UI opgebouwd voor de header */

export class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>Logo</li>
                        <li>Foto's toevoegen</li>
                        <li>Foto ambums</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
