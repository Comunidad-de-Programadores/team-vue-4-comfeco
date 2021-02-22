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
      // Add class for user login succes -- start
      document.getElementById("js_isLogedOptions").className = "isLogged";
      // Add class for user login succes -- end
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
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(error);
      });
    return loginRemember;
  }

  async authUser() {
    const user = firebase.auth().currentUser;
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
      // Add class for user login succes -- start
      document.getElementById("js_isLogedOptions").className = "isLogged";
      // Add class for user login succes -- end
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
      // Add class for user login succes -- start
      document.getElementById("js_isLogedOptions").className = "isLogged";
      // Add class for user login succes -- end
      return informationUser;
    } catch (error) {
      const message = error.message;
      console.error(message);
    }
  }

  async singOutOfAccount() {
    // Add class for user login succes -- start
    document.getElementById("js_isLogedOptions").classList.remove("isLogged");
    // Add class for user login succes -- end
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
