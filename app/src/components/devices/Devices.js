import React, { Component } from 'react'
import CardItem from '../partials/CardItem'
import { Link } from 'react-router-dom'

/* Hier wordt de UI opgebouwd om te tonen welke devices ik heb */

const devicesItemsList = [
    {title: "Device toevoegen", icon: "fa fa-plus", link: "addDevice"}, {title: "Device 1", icon:"fas fa-desktop", link: "device"}, {title: "Device 2", icon:"fas fa-desktop", link: "device"}, {title: "Device 3", icon:"fas fa-desktop", link: "device"}, {title: "Device 4", icon:"fas fa-desktop", link: "device"}
]

export class Devices extends Component {
    render() {
        return (
            <div className="myAlbums__container">
                <h1 className="devices__page__title h1 text-center page_title">Mijn albums</h1>
                
                <div className="content__container devices__card__container">
                        {devicesItemsList.map(item => 
                            <Link className="cardLinks" to={'/'+item.link} key = {item.title}>
                                <CardItem
                                    key = {item.title}
                                    title = {item.title}
                                    icon = {item.icon}
                                />
                            </Link>
                        )}
                </div>
            </div>
        )
    }
}

export default Devices
