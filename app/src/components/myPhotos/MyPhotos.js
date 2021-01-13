import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from '../partials/CardItem';
import { useAuth } from '../auth/AuthContext';
import UseFirestore from '../hooks/UseFirestore';
import { Card } from 'react-bootstrap';

/* Hier wordt de UI opgebouwd om mijn de alle geuploade foto's van de ingelogde gebruiker te tonen */

const FotoUpload = [
    {title: "Foto's uploaden", icon: "fa fa-plus", link: "addPhoto"}
]

export default function MyPhotos() {
    const { currentUser } = useAuth()
    const currentUserId = currentUser.uid;

    const { docs } = UseFirestore('images'+currentUserId);
    console.log(docs);

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
                    { docs && docs.map( doc => (
                        <Card className="cardItem__container" key={doc.id}>
                            <img src={doc.url} alt="uploaded pic"/>
                        </Card>
                    ))}
            </div>
        </div>
    )
}
