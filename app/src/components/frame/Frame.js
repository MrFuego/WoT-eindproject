import React from 'react';
import { v4 as uuid } from "uuid";
import { projectFirestore, timestamp } from '../../firebase';
import { useAuth } from '../auth/AuthContext';
import UseFirestore from '../hooks/UseFirestore';
import { useHistory } from "react-router-dom";

export default function Frame(){

    const history = useHistory()
    const createdAt = timestamp();
    const saveIdToFirebase = (cvalue) => {
        console.log('save ' + cvalue);
        projectFirestore.collection('frame'+cvalue).add({
            name: "",
            userId: "",
            createdAt: createdAt,
        });
    }

    // const { id } = useFirestore('id'+currentUserId);
    // const { currentUser } = useAuth()
    // const currentUserId = currentUser.uid;
    // const { docs } = useFirestore('images'+currentUserId);

    // function to create a unique ID for the frame
    const uniqueId = uuid();

    // function to set a cookie
    const setCookie = (cname, cvalue) => {
        // var d = new Date();
        //d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        // var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + ";path=/";
        saveIdToFirebase(cvalue);
    }

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

    const frameID = getCookie("frameID");
    const { docs } = UseFirestore('frame'+frameID);

    const checkDocs = () => {
        setTimeout( 250);
        console.log(docs);
        if(docs.length > 0){
            if (docs[0].userId !== ""){
                console.log(docs[0].userId);
                console.log("frame is gelinkt")
                history.push("/slideshow")
            } else {
                console.log("niet gelinkt")
            }
        }
    }

    const checkCookie = () => {
        if (frameID !== "") {
            //const { docs } = UseFirestore('frame'+frameID);
            // if (docs[0].userId === "") {
            //     document.getElementById('showId').innerHTML('Dit toestel is nog niet toegevoegd aan een account. Ga naar jouw account, vervolgens naar devices en voeg volgende code in: ' + frameID);
            // } else {
            //     getPhotos('test')
            //     console.log("hallo");
            // }
            checkDocs();
        } else {
            const frameKey = uniqueId;
            console.log(frameKey);
            if (frameKey !== "" && frameKey != null) {
                setCookie("frameID", frameKey);
                console.log(frameID);
            }
        }
    }

    const getPhotos = () => {
        console.log("foto's worden getoond");
        console.log(getCookie("frameID"));
    }

    checkCookie()

    return (
        <div>
            <h1>foto's</h1>
            { docs && docs.map( doc => (
                <p key={doc.id}>Dit toestel is nog niet toegevoegd aan een account. Ga naar jouw account, vervolgens naar devices en voeg volgende code in om het device te linken: <span><br></br><br></br>{frameID}</span><br></br><br></br> Nadat je het toestel hebt toegevoegd aan je account dien je het te herstarten! </p>
            ))}
        </div>
    )
}

