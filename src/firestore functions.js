// added "type": "module" to package.json to avoid error: cannot use import statement outside a module

import {db, auth} from './firebase.js';
import { getFirestore, collection, getDoc,getDocs, doc, setDoc} from 'firebase/firestore';

/*
 1. Click on user profile pic can set pic

 */


//--------------0. Create new user profile document upon successful registration---------------
const register = (email, password) =>{
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('Users').doc(cred.user.uid).set({
            username: "Default user",
            gender: " ",
            age: " ",
            location: " ",
        }); //a doc reference in firestore, set default profile
    })
}
// Reference: https://www.youtube.com/watch?v=qWy9ylc3f9U&t=325s
//--------------0. Create new user profile document upon successful registration---------------


//--------------1. Display current user profile---------------
const user = auth.currentUser;
if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;

    const docRef = db.collection('Users').doc(user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const gender = docSnap.get('gender');
        const age = docSnap.get('age');
        const location = docSnap.get('location');
    } else {
        console.log("No such document!");
    }
}
//--------------1. Display user profile---------------




//--------------Add new field to document---------------
// const addField = (path, data) => {
//   const docRef = doc(db,path);
//   setDoc(docRef, data, { merge: true });
// }
// addField('Doctors/68aZDzqHubdE5fS20oEH', {dev_add1: "adding new infoooo"});
//--------------1. Add new field to document---------------



//--------------2. Update current user profile----------------------
async function updateDoc(docRef,data) {
    await setDoc(docRef, data);
    console.log("Document written with ID: ", docRef.id);
}
//--------------2. Update current user profile----------------------



//---------------3. Get all user/doctor id -----------------
async function getId(path) {
    const querySnapshot = await getDocs(collection(db, path));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id}`);
    });
}
// getId("Doctors");
//----------------3. Get all user/doctor id -----------------



//----------------4. Display document field values ----------------------


//----------------4. Display document field values ----------------------


