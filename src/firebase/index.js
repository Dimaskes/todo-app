import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDtfIsdB_mVN2TF4epIop0lBi9SfEHie04',
  authDomain: 'todoapp-66caf.firebaseapp.com',
  projectId: 'todoapp-66caf',
  storageBucket: 'todoapp-66caf.appspot.com',
  messagingSenderId: '97055167129',
  appId: '1:97055167129:web:9415ba1a1391bb4f59de08',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
