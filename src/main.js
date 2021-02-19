import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Import firebase
import firebase from "firebase";
import firebaseConfig from "./firebase/config";
// Import Sweetalert2
import VueSweetalert2 from "vue-sweetalert2";

//Inicializando nuestro app con firebase
firebase.initializeApp(firebaseConfig);

const app = createApp(App);

// Use router
app.use(router);

// Use Sweetalert
app.use(VueSweetalert2);

app.mount("#app");
