import React, { useRef } from 'react'
import { Form, Button, Alert, Container } from "react-bootstrap"
import { v4 as uuid } from "uuid";

/* Hier wordt de UI opgebouwd om te tonen welke devices ik heb */

export default function AddDevices() {
    const nameRef = useRef()
    const codeRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("gelukt!");

        //geef een random ID -> wordt gebruikt voor frame gedeelte
        console.log (uuid());
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
