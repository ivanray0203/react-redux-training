import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAmyOvmSZDzUIbJRaT-TWjbKd2heLij5Ao",
    authDomain: "todo-app-1d68b.firebaseapp.com",
    projectId: "todo-app-1d68b",
    storageBucket: "todo-app-1d68b.appspot.com",
    messagingSenderId: "483030200430",
    appId: "1:483030200430:web:a4fcd9438f63f2a849767f",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
