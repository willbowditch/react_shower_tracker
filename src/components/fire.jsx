import firebase from 'firebase'

var config = {
    apiKey: 'AIzaSyAUuqbo52nELSfIJyQqCc19xcgHpOtlVSY',
    authDomain: 'dft-dst-sb-willbowditch.firebaseapp.com',
    databaseURL: 'https://showerapp.firebaseio.com/',
    projectId: 'dft-dst-sb-willbowditch',
    storageBucket: 'dft-dst-sb-willbowditch.appspot.com',
    messagingSenderId: '41986159108'
}

firebase.initializeApp(config)

// Get a reference to the database service
var fire = firebase.database()

export default fire
