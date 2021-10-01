import "firebase/compat/database"; // needed for V9
import firebase from "firebase/compat/app"; // needed for V9

const firebaseConfig = {
  apiKey: "AIzaSyCWl4OlTb7uTRhMhMCnfK1xkfZ-9LYmkhY",
  authDomain: "react-contact-3e5cf.firebaseapp.com",
  databaseURL: "https://react-contact-3e5cf-default-rtdb.firebaseio.com",
  projectId: "react-contact-3e5cf",
  storageBucket: "react-contact-3e5cf.appspot.com",
  messagingSenderId: "367757304833",
  appId: "1:367757304833:web:c33c145fd6c27466a8cc00"
};

const fireDb = firebase.initializeApp(firebaseConfig)

export default fireDb.database().ref();