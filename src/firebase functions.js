import {auth, db} from "./src/firebase.js";
import { doc, addDoc, setDoc, collection } from "firebase/firestore";

const createUserDoc = async(uid, data) => {
    await setDoc(doc(db, 'Users', uid), data);
}



export {createUserDoc};
