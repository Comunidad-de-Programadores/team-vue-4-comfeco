import firebase from "firebase";

class Autenticacion {
  async autEmailPass(email, password) {
    try {
      const loginEmailPass = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const response = await loginEmailPass.user;
      const nameUser = await response.displayName;
      const emailUser = await response.email;
      //Add name of user in DOM -- start
      document.getElementById("js_user-name").textContent = nameUser;
      document.getElementById("js_user-email").textContent = emailUser;
      //Add name of user in DOM -- end
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
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(error);
      });
    return loginRemember;
  }

  async autUser() {    
    var user = await firebase.auth().currentUser;
    return user;  
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
      const informationUser = singInGoogle.user;
      const nameUser = informationUser.displayName;
      const emailUser = informationUser.email;
      const photoUser = informationUser.photoURL;
      //Add name of user in DOM -- start
      document.getElementById("js_user-name").textContent = nameUser;
      document.getElementById("js_user-email").textContent = emailUser;
      document.getElementById("js_avatar-user").setAttribute("src", photoUser);
      //Add name of user in DOM -- end
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
      const nameUser = informationUser.displayName;
      const emailUser = informationUser.email;
      const photoUser = informationUser.photoURL;
      //Add name of user in DOM -- start
      document.getElementById("js_user-name").textContent = nameUser;
      document.getElementById("js_user-email").textContent = emailUser;
      document.getElementById("js_avatar-user").setAttribute("src", photoUser);
      //Add name of user in DOM -- end
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
