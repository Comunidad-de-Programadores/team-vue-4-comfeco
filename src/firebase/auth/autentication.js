import firebase from "firebase";

class Autenticacion {
  constructor() {
    this.db = firebase.firestore();
  }

  async autEmailPass(email, password) {
    try {
      const loginEmailPass = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const response = await loginEmailPass.user;

      return response;
    } catch (error) {
      const message = error.message;
      alert(message);
      console.error(error);
    }
  }

  async autRemember(email, password) {
    const loginRemember = await firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage);
      });
    return loginRemember;
  }

  async authUser() {
    const user = firebase.auth().currentUser;
    if (user != null) {
      const docRef = this.db
        .collection("userPersonalInformation")
        .doc(user.uid);
      let photo = "./assets/images/userDefaultImage.png";
      // Traer la informacion del usuario
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            if (
              user.providerData[0].providerId === "google.com" ||
              user.providerData[0].providerId === "facebook.com"
            ) {
              document
                .getElementById("js_avatar-user")
                .setAttribute("src", user.photoURL);
            } else {
              if (data.uPhoto != "") {
                const storageRef = firebase.storage().ref();
                const spaceRef = storageRef.child(data.uPhoto);
                spaceRef.getDownloadURL().then(function(downloadURL) {
                  document
                    .getElementById("js_avatar-user")
                    .setAttribute("src", downloadURL);
                });
              } else {
                document
                  .getElementById("js_avatar-user")
                  .setAttribute("src", photo);
              }
            }
          }
        })
        .catch((error) => {
          console.error("Error al traer la informacion del usuario:", error);
        });
      document.getElementById("js_isLogedOptions").className = "isLogged";
      document.getElementById("js_header").classList.add("bgColor");
      document.getElementById("js_user-name").textContent = user.displayName;
      document.getElementById("js_user-email").textContent = user.email;
    }
    return user;
  }

  async crearCuentaEmailPass(email, password, nombres) {
    try {
      const crearCuentaFirebase = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const response = crearCuentaFirebase.user;
      // Set a name for the user
      response.updateProfile({
        displayName: nombres,
      });
      return response;
    } catch (error) {
      const message = error.message;
      console.error(message);
    }
  }

  async authCuentaGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const singInGoogle = await firebase.auth().signInWithPopup(provider);
      const informationUser = singInGoogle.user;

      return informationUser;
    } catch (error) {
      const message = error.message;
      console.error(message);
    }
  }

  async authCuentaFacebook() {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const singInFacebbok = await firebase.auth().signInWithPopup(provider);
      const informationUser = singInFacebbok.user;

      return informationUser;
    } catch (error) {
      const message = error.message;
      console.error(message);
    }
  }

  async singOutOfAccount() {
    // Add class for user login succes -- start
    document.getElementById("js_isLogedOptions").classList.remove("isLogged");
    document.getElementById("js_header").classList.remove("bgColor");
    // Add class for user login succes -- end
    return await firebase.auth().signOut();
  }

  async verifiedUser() {
    const user = firebase.auth().currentUser;
    const configuracion = {
      url: process.env.VUE_APP_RUTA_API || "http://localhost:8080/",
    };
    const response = await user.sendEmailVerification(configuracion);
    return response;
  }

  async recuperarContraseña(email) {
    return await firebase.auth().sendPasswordResetEmail(email);
  }
}

export default Autenticacion;
