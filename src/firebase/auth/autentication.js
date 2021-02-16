import firebase from "firebase";

class Autenticacion {
  autEmailPass(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        alert(`Bienvenido ${result.user.displayName}`);
        if (result.user.emailVerified) {
          alert("Cuenta verificada!");
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
        result.user.updateProfile({
          displayName: nombres,
        });
        //Use this code for verification account user
        const configuracion = {
          url: "http://192.168.1.12:8080/register",
        };

        result.user.sendEmailVerification(configuracion).catch((error) => {
          console.error(error);
          alert(error.message, 4000);
        });

        /*firebase.auth().signOut();*/
        setTimeout(() => {
          alert(
            `Bienvenido ${nombres}, debes realizar el proceso de verificación`
          );
        }, 4000);
      })
      .catch((error) => {
        console.error(error);
        setTimeout(() => {
          alert(error.message);
        }, 4000);
      });
  }

  authCuentaGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
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
          alert(`Error autenticarse con Google ${error}`);
        }, 4000);
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
}

export default Autenticacion;
