import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import CardItem from '../partials/CardItem'
import './dashboard.css'

/* Hier wordt de UI van het dashboard van de ingelogde gebruiker opgebouwd */


const DashboardItemsList = [
    {title: "Foto toevoegen", icon: "fa fa-plus", link: "addPhoto"}, {title: "Mijn foto's", icon:"fas fa-image", link: "myPhotos"}, /* {title: "Mijn albums", icon:"far fa-images", link: "myAlbums"},*/ {title: "Account", icon:"fas fa-user", link: "updateProfile"}, {title: "Devices", icon:"fas fa-desktop", link: "devices"}
]

export default function Dashboard(){

    const { currentUser } = useAuth()

    return (
        <div className="dashboard__container">
            <h1 className="dashboard__page__title h1 text-center  mt-5">Welkom {currentUser.email}</h1>
            
            <div className="content__container dashboard__card__container">
                    {DashboardItemsList.map(item => 
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

