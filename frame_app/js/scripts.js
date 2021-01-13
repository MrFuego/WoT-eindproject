// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDomMdKQ6JsQXj82uqEB2nPhOjdFPZoi4Y",
    authDomain: "wot-eindwerk-2.firebaseapp.com",
    databaseURL: "https://wot-eindwerk-2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "wot-eindwerk-2",
    storageBucket: "wot-eindwerk-2.appspot.com",
    messagingSenderId: "1021736818046",
    appId: "1:1021736818046:web:39a7ebd696641bdd764f2f",
    measurementId: "G-ERW4B9RQGD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


// function to create a unique ID for the frame
function uniqueId () {
    // desired length of Id
    var idStrLen = 32;
    // always start with a letter -- base 36 makes for a nice shortcut
    var idStr = (Math.floor((Math.random() * 25)) + 10).toString(36) + "_";
    // add a timestamp in milliseconds (base 36 again) as the base
    idStr += (new Date()).getTime().toString(36) + "_";
    // similar to above, complete the Id using random, alphanumeric characters
    do {
        idStr += (Math.floor((Math.random() * 35))).toString(36);
    } while (idStr.length < idStrLen);

    return (idStr);
}

// function to set a cookie
function setCookie(cname, cvalue, exdays) {
    // var d = new Date();
    //d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    // var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + ";path=/";
}

// function to get a cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var frameID = getCookie("frameID");
    if (frameID != "") {
        getPhotos()
        console.log("hallo");
    } else {
        frameID = uniqueId();
        if (frameID != "" && frameID != null) {
            setCookie("frameID", frameID);
            console.log(frameID);
        }
    }
}

function getPhotos() {
    console.log("foto's worden getoond");
}

checkCookie()
