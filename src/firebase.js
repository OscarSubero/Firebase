//import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';

//import 'firebase/firestore';
import 'firebase/compat/firestore';

var firebaseConfig = {
	apiKey: 'AIzaSyDmN4gOZAZ7FegaCLVhfVFa9SNYw_xnylc',
	authDomain: 'fir-16910.firebaseapp.com',
	projectId: 'fir-16910',
	storageBucket: 'fir-16910.appspot.com',
	messagingSenderId: '415364358453',
	appId: '1:415364358453:web:f08ede6aea448439436c7c',
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
