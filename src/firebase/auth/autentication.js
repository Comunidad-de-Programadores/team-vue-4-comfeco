import firebase from "firebase";

class Autenticacion {
  autEmailPass(email, password) {
    firebase
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
      });
  }

  crearCuentaEmailPass(email, password, nombres) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user.emailVerified) {
          alert("Cuenta verificada");
        } else {
          alert("Por favor revisar su correo, para poder verificar la cuenta");
        }
      })
      .then(() => {
        this.verifiedUser();
      })
      .catch(({ code, message }) => {
        alert(`${code} - ${message}`);
      });
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

  singOutOfAccount() {
    firebase.auth().signOut();
  }

  verifiedUser() {
    const user = firebase.auth().currentUser;
    const configuracion = {
      url: "http://localhost:8080/login",
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
