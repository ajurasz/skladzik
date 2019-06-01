import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(config);

const itemsRef = firebase.firestore().collection('items');

export const fetch = async (all = true) => {
    let snapshost;
    if (all) {
        snapshost = await itemsRef.get();
    } else {
        snapshost = await itemsRef.where('show', '==', true).get();
    }
    return snapshost.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
};

export const update = async coal => {
    const { id, ...rest} = coal;
    if (id === undefined) {
        await itemsRef.add(rest);
    } else {
        await itemsRef.doc(id).update(rest);
    }
};
