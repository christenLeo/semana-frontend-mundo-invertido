import { app } from './app.js';
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

export const subscribe = async (body) => {
    const db = getFirestore(app);
    const players = collection(db, 'players');
    const docRef = await addDoc(players, body);
    return docRef.id;
};