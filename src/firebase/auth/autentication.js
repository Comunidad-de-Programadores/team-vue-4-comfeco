import firebase from "firebase";

class Autenticacion {
  async autEmailPass(email, password) {
    const loginEmailPass = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const response = await loginEmailPass.user;
    return response;
  }

  async crearCuentaEmailPass(email, password, nombres) {
    const crearCuentaFirebase = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const response = await crearCuentaFirebase.user;
    // Set a name for the user
    response.updateProfile({
      displayName: nombres,
    });
    return response;
  }

  authCuentaGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        alert(`Bienvenido ${result.user.displayName} !! `);
      })
      .catch((error) => {
        console.error(error);
        alert(`Error autenticarse con Google ${error}`);
      });
  }

  authCuentaFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        alert(`Bienvenido ${result.user.displayName} !! `);
      })
      .catch((error) => {
        console.error(error);
        alert(`Error autenticarse con Facebook ${error}`);
      });
  }

  async singOutOfAccount() {
    const logOutInformation = await firebase.auth().signOut();
    return logOutInformation;
  }

  verifiedUser() {
    const user = firebase.auth().currentUser;
    const configuracion = {
      url: "http://localhost:8080/",
    };
    user
      .sendEmailVerification(configuracion)
      .then(() => {
        console.log("Correo enviado... :)");
      })
      .catch((error) => {
        alert(`${error.message}`);
      });
  }
}

export default Autenticacion;
