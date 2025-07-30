// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_G1MzAWHCUFVRkVPy1Yh6vzjErrW97fE",
  authDomain: "ai-mock-interview-25.firebaseapp.com",
  projectId: "ai-mock-interview-25",
  storageBucket: "ai-mock-interview-25.firebasestorage.app",
  messagingSenderId: "951974901111",
  appId: "1:951974901111:web:6e6ab48298e1273cad9d72",
  measurementId: "G-KN6E1TP2TC",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics only if supported (browser environment)
let analytics: ReturnType<typeof getAnalytics> | null = null;

isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  })
  .catch(() => {
    // No analytics in this environment
  });

export default app;
