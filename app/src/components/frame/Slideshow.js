import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import { useAuth } from '../auth/AuthContext';
import "react-slideshow-image/dist/styles.css";
import UseFirestore from "../hooks/UseFirestore";
import { useHistory } from "react-router-dom";

  
export default function Slideshow(){

    const history = useHistory()

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

    const checkDocs = () => {
        const { docs } = UseFirestore('frame'+frameID);
        console.log(docs[0]);
        if(docs.length > 0){
            if (docs[0].userId !== ""){
                console.log(docs);
                console.log("userId is gevonden")
                return docs[0].userId;
            } else {
                history.push("/frame")
            }
        } else {
            console.log('nope');
            //setTimeout(checkDocs, 250);
        }
    }

    const currentUserId = checkDocs();
    console.log(currentUserId);
    const { docs } = UseFirestore('images'+currentUserId);


    return (
        <div className="slide-container">
            <Slide>
                { docs && docs.map( doc => (
                    <div className="each-slide" key={doc.id}>
                        <div style={{'backgroundImage': `url(${doc.url})`}}>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}

