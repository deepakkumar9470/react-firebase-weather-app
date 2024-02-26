import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "react-weather-auth.firebaseapp.com",
    projectId: "react-weather-auth",
    storageBucket: "react-weather-auth.appspot.com",
    messagingSenderId: "843759526824",
    appId: process.env.API_ID,
    measurementId: "G-YCZ7XMGZ54"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;