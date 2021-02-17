import firebase from "firebase";

class Autenticacion {
  async autEmailPass(email, password) {
    const loginEmailPass = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const response = await loginEmailPass.user;
    return response;
    /*firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user.emailVerified) {
          alert("Cuenta verificada!");
          alert(`Bienvenido ${result.user.displayName}`);
        } else {
          alert("Por favor realiza la verificación de la cuenta");
          firebase.auth().signOut();
        }
      });*/
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
        setTimeout(() => {
          alert(`Bienvenido ${result.user.displayName} !! `);
        }, 4000);
      })
      .catch((error) => {
        console.error(error);
        setTimeout(() => {
          alert(`Error autenticarse con Facebook ${error}`);
        }, 4000);
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
