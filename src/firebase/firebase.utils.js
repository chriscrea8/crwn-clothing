import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: 'AIzaSyCLxyGVqIR2-PClCjJEWc5GUSQStR31BkE',
  authDomain: 'crwm-db-ab822.firebaseapp.com',
  projectId: 'crwm-db-ab822',
  storageBucket: 'crwm-db-ab822.appspot.com',
  messagingSenderId: '395435671515',
  appId: '1:395435671515:web:477f070d036ddb2cebb1fe',
  measurementId: 'G-9PMZXSGTPR',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
