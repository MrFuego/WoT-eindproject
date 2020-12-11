import React, { useRef, useState }  from 'react'
import { Form, Button, Alert, Container } from "react-bootstrap"
import ProgressBar from "./ProgressBar";

export default function AddAlbum() {
    const nameRef = useRef()
    const uploadRef = useRef()
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        let selected = e.target.files[0];

        const types = ["image/png", "image/jpeg"]
        
        
        if(selected && types.includes(selected.type)) {
            setFile(selected);
            console.log(selected);
            setError('');
        } else {
            setFile(null);
            setError("Gelieve een extensie te uploaden van het juiste type (jpeg of png)");
        }

        
    }

    return (
        <div>
            <h1>Album toevoegen</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                    <Form.Label>Album naam</Form.Label>
                    <Form.Control type="text" ref={nameRef} required/>
                </Form.Group>
                <Form.Group id="files">
                    <Form.Control type="file" ref={uploadRef} multiple onChange={handleSubmit}/>
                </Form.Group>
                <div className="output">
                    { error && <Alert variant="danger"> { error } </Alert> }
                    { file && <div> {file.name}</div> }
                    { file && <ProgressBar file={file} setFile={setFile} /> }
                </div>
            </Form>
        </div>
    )
}
