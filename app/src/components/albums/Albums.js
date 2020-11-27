import React, { Component } from 'react'
import CardItem from '../partials/CardItem'

/* Hier wordt de UI opgebouwd van het dashboard van de albums */

const myAlbumsItemsList = [
    {title: "Album toevoegen", icon: "fa fa-plus"}, {title: "Album 1", icon:"fas fa-image"}, {title: "Album 2", icon:"fas fa-image"}, {title: "Album 3", icon:"fas fa-image"}, {title: "Album 4", icon:"fas fa-image"}, {title: "Album 5", icon:"fas fa-image"}, {title: "Album 6", icon:"fas fa-image"}, {title: "Album 7", icon:"fas fa-image"}
]

export class Albums extends Component {
    render() {
        return (
            <div className="myAlbums__container">
                <h1 className="myAlbums__page__title h1 text-center page_title">Mijn albums</h1>
                
                <div className="content__container myAlbums__card__container">
                        {myAlbumsItemsList.map(item => 
                            <CardItem
                                key = {item.title}
                                title = {item.title}
                                icon = {item.icon}
                            />
                        )}
                </div>
            </div>
        )
    }
}

export default Albums
