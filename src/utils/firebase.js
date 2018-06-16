import firebase from 'firebase'
// import vuefire from 'VueFire'
const config = {
  apiKey: 'AIzaSyCtAr-t2PGlTtwhZlAXFQdjcx6lvi7mQAI',
  authDomain: 'vue-fire-todo.firebaseapp.com',
  databaseURL: 'https://vue-fire-todo.firebaseio.com',
  projectId: 'vue-fire-todo',
  storageBucket: 'vue-fire-todo.appspot.com',
  messagingSenderId: '160419077181'
}
firebase.initializeApp(config)
export const database = firebase.database()
export const todosRef = database.ref('/todos')
export const ref = database.ref()
export const auth = firebase.auth()
