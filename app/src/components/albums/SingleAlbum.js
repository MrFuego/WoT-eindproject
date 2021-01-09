import React from 'react';
import { useAuth } from '../auth/AuthContext';
import useFirestore from '../hooks/UseFirestore';

const SingleAlbum = () => {
    const { currentUser } = useAuth()
    const currentUserId = currentUser.uid;

    const { docs } = useFirestore('images'+currentUserId);
    console.log(docs);

    return (
        <div className="img-grid">
            { docs && docs.map( doc => (
                <div className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt="uploaded pic"/>
                </div>
            ))}
        </div>
    )
}

export default SingleAlbum;