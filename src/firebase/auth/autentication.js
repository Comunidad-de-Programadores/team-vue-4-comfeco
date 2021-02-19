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
      const message = error.message;
      alert(message);
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
      const message = error.message;
      console.error(message);
    }
  }

  async authCuentaFacebook() {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const singInFacebbok = await firebase.auth().signInWithPopup(provider);
      const informationUser = await singInFacebbok.user;
      return informationUser;
    } catch (error) {
      const message = error.message;
      console.error(message);
    }
  }

  async singOutOfAccount() {
    return await firebase.auth().signOut();
  }

  async verifiedUser() {
    const user = firebase.auth().currentUser;
    const configuracion = {
      url: "http://localhost:8080/",
    };
    const response = await user.sendEmailVerification(configuracion);
    return response;
  }

  async recuperarContraseña(email) {
    return await firebase.auth().sendPasswordResetEmail(email);
  }
}

export default Autenticacion;
