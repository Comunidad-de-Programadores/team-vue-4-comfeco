import firebase from "firebase";

class Autenticacion {
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

  async crearCuentaEmailPass(email, password, nombres) {
    try {
      const crearCuentaFirebase = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      const response = await crearCuentaFirebase.user;
      // Set a name for the user
      response.updateProfile({
        displayName: nombres,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  async authCuentaGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const singInGoogle = await firebase.auth().signInWithPopup(provider);
      const informationUser = await singInGoogle.user;
      return informationUser;
    } catch (error) {
      console.log(error);
    }
  }

  async authCuentaFacebook() {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const singInFacebbok = await firebase.auth().signInWithPopup(provider);
      const informationUser = await singInFacebbok.user;
      return informationUser;
    } catch (error) {
      console.log(error);
    }
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
