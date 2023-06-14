// Import the functions you need from the SDKs you need
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getDatabase, onChildAdded, onValue, push, ref, set } from "firebase/database";


import { DocumentData, DocumentReference, FieldValue, arrayUnion, doc, getDoc, getFirestore, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4wVfQQcnVsIHLPn8TKbQ1CBOEVZWDcp4",
  authDomain: "tmovie-31686.firebaseapp.com",
  databaseURL: "https://tmovie-31686-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tmovie-31686",
  storageBucket: "tmovie-31686.appspot.com",
  messagingSenderId: "573114857076",
  appId: "1:573114857076:web:414d2c1e055467a7a64321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase();




const provider = new GoogleAuthProvider();
const handleLogin=async()=>{
  await signInWithPopup(auth, provider)
}
const handleLogout=async()=>{
  await signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

const addComment = async (movieId:string, comment:string) => {
  const postListRef = ref(database, `comments/${movieId}`);
  const newCommentRef = push(postListRef);
  await set(newCommentRef,{
    comment: comment,
    createdAt: new Date().toISOString(),
    user: {
      id: auth.currentUser?.uid,
      name: auth.currentUser?.displayName,
      photo: auth.currentUser?.photoURL
    }
  })

  

}

const getComments=async(movieId:string,cb:any)=>{
  const dbRef = ref(database, `comments/${movieId}`);

  onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    data && cb(Object.values(data));
  });
}


export {
  auth,
  handleLogin,
  handleLogout,
  addComment,
  getComments
}