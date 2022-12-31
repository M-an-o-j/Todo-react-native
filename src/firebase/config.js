import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    projectId: 'todo-80106',
    appId: '1:112932129157:android:e52ca28c7f267c16b09cec',
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export {firebase}