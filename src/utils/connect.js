import * as firebase from 'firebase';

 export default class Connect {
    static init() {
        firebase.initializeApp({
            apiKey: "AIzaSyDEYWvK77lvbIu61BL5TwQJ0cV76yTcGvQ",
            authDomain: "inventory-e2cbb.firebaseapp.com",
            databaseURL: "https://inventory-e2cbb.firebaseio.com",
            projectId: "inventory-e2cbb",
            storageBucket: "inventory-e2cbb.appspot.com",
        })
    }
}

