import { initializeApp } from 'firebase/app';
import { getAuth, deleteUser } from 'firebase/auth';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage';
import { getDatabase } from "firebase/database"; 
import { getFunctions } from "firebase/functions"; // Import Functions
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize storage
const API_KEY = "Your API"; // Replace with your YouTube Data API key
const realtimeDb = getDatabase(app);
const functions = getFunctions(app); 
async function deleteUserData(user) {
  try {
    const userEmail = user.email;
    
    
    const userVideoCollection = collection(db, 'videos', userEmail, 'userVideos');
    const videoSnapshot = await getDocs(userVideoCollection);

   
    for (const videoDoc of videoSnapshot.docs) {
      await deleteDoc(videoDoc.ref);
    }

    
    const userDoc = doc(db, 'users', user.uid);
    await deleteDoc(userDoc);

    
    await deleteUser(user);
    
    alert('Your account and all associated videos have been deleted.');
  } catch (error) {
    console.error('Error deleting user data:', error);
    alert('Failed to delete account. Please try again.');
  }
}

export { auth, db, storage, API_KEY, deleteUserData,realtimeDb,functions };
