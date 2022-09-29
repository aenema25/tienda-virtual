import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCL8xVE3NR-72RJRSWAe43OJvEf4qEjtT4",
    authDomain: "tienda-virtual-5d0a7.firebaseapp.com",
    projectId: "tienda-virtual-5d0a7",
    storageBucket: "tienda-virtual-5d0a7.appspot.com",
    messagingSenderId: "833846132217",
    appId: "1:833846132217:web:70db167d27b268a4515128",
    measurementId: "G-ZVFJVVHMY9"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db

