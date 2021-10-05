import * as firebase from 'firebase';
import "firebase/database";

let config = {
  apiKey: "AIzaSyAMPoAIHxMrjq5S23DfpPCO9W3VuMhfSFo",
  authDomain: "csee-c8c7d.firebaseapp.com",
  databaseURL: "https://csee-c8c7d-default-rtdb.firebaseio.com",
  projectId: "csee-c8c7d",
  storageBucket: "csee-c8c7d.appspot.com",
  messagingSenderId: "918086775945",
  appId: "1:918086775945:web:9f8a13a4b100209d450258"
};

firebase.initializeApp(config);

export default firebase.database();
