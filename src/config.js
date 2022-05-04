import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBjVGOUvT06Dydn6xc1nWxdyju0Etmi4c0",
    authDomain: "react-auth-ae043.firebaseapp.com",
    projectId: "react-auth-ae043",
    storageBucket: "react-auth-ae043.appspot.com",
    messagingSenderId: "260563450446",
    appId: "1:260563450446:web:4dd9974d5d6bb45515e11f",
    measurementId: "G-ET1NRZYFYW"
});

export default firebaseConfig;