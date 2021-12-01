import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYn75FMpEmTPVqQOG215ULQncQpuae4E8",
    authDomain: "react-native-838cb.firebaseapp.com",
    projectId: "react-native-838cb",
    storageBucket: "react-native-838cb.appspot.com",
    messagingSenderId: "665884443738",
    appId: "1:665884443738:web:a3d079d5e9b1f9d2d34463",
    measurementId: "G-9TGET91X6K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export const getFavoritos = async () => {
    const citiesCol = collection(db, 'Favorito');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList
}

export const saveFavoritos = async (favorite) => {
    const a = await addDoc(collection(db, 'Favorito'), favorite);
}

export const deleteFavoritos = async (id) => {
    const citiesCol = collection(db, 'Favorito');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(docs => {
        const a = docs.data()
        if (a.id === id) {
            const remove = doc(db, 'Favorito', docs.id)
            deleteDoc(remove)
        }
    });
}