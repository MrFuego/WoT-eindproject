import { useState, useEffect } from 'react';
import { projectStorage } from '../../firebase';
import { useAuth } from '../auth/AuthContext';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const { currentUser } = useAuth()
    const currentUserId = currentUser.uid;


    useEffect(() => {
        const storageRef = projectStorage.ref(currentUserId).child(file.name);

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) *100;
            setProgress(percentage);
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        });
    }, [file])

    return { progress, url, error }

}

export default useStorage;