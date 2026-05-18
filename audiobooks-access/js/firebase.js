import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwedwdUycIXM1M2_Oyyg8owbeA84VjvE8",
  authDomain: "audiobooks-access.firebaseapp.com",
  projectId: "audiobooks-access"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);