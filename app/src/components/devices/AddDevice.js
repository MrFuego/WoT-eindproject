import React, { useRef } from 'react';
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useAuth } from '../auth/AuthContext';
import { projectFirestore } from '../../firebase';
import UseFirestore from '../hooks/UseFirestore';

/* Hier wordt de UI opgebouwd om te tonen welke devices ik heb */

export default function AddDevices() {

    // function to get a cookie
    const getCookie = (cname) => {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const history = useHistory()
    const nameRef = useRef()
    const codeRef = useRef()
    const { currentUser } = useAuth()
    const currentUserId = currentUser.uid;
    const frameID = getCookie("frameID");
    const { docs } = UseFirestore('frame'+frameID);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("gelukt!");
        const docId = docs[0].id
        const collectionRef = projectFirestore.collection('frame'+frameID).doc(docId);
        collectionRef.update({
            name: nameRef.current.value,
            userId: currentUserId,
        })
        history.push("/devices")
    }

    return (
        <div className="addDevice__container">
            <h1 className="devices__page__title h1 text-center page_title  mt-5">Frame toevoegen</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                    <Form.Label>Naam voor toestel</Form.Label>
                    <Form.Control type="text" ref={nameRef} required/>
                </Form.Group>
                <Form.Group id="deviceId">
                    <Form.Label>unieke code van het toestel</Form.Label>
                    <Form.Control type="text" ref={codeRef} required/>
                </Form.Group>
                <Button variant="primary" type="submit">Toevoegen</Button>
            </Form>
        </div>
    )
}
