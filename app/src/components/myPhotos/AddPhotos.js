import React from 'react'
import { useAuth } from '../auth/AuthContext';
import { projectStorage } from '../../firebase';


export default function AddPhotos() {

   /*  const { currentUser } = useAuth();
    const currentUserId = currentUser.uid;


    //display multi
    const handleChange = (e) =>{

        const file = Array.from(e.target.files);
        this.setState({ file });   
    }


    //upload multi
    const fileuploadHandler = () => {
    
        const storageRef = projectStorage.ref("images/").child(this.file.name);
        this.state.file.forEach((file) => {
            storageRef
                .child(`images/${file.name}`)
                .putFile(file).then((snapshot) => {
            })
        });
    }; */


    return (
        <div className="myPhotos__container">
            <h1>Upload photos</h1>
            {/* <input id="file" type="file" onChange={handleChange.bind(this)} required multiple />
            <button onClick={fileuploadHandler}>Upload!</button> */}
        </div>
    )
}
