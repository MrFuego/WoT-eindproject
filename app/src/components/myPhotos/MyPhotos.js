import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from '../partials/CardItem'

/* Hier wordt de UI opgebouwd om mijn de alle geuploade foto's van de ingelogde gebruiker te tonen */

const FotoUpload = [
    {title: "Foto's uploaden", icon: "fa fa-plus", link: "addPhotos"}
]

export default function MyPhotos() {
    return (
        <div className="myPhotos__container">
            <h1 className="myPhotos__page__title h1 text-center mt-5">Mijn foto's</h1>
            
            <div className="content__container myPhotos__card__container">
                    {FotoUpload.map(item =>
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
