import firebase from "firebase";

class User {
  constructor() {
    this.db = firebase.firestore();
  }
  /*
    En el parametro description colocar una description corta como por ejm. 
    "Hola mi nombre es: nick, y me gusta programar", luego esta informacion de va a poder editar
    Al momento de crear solo se usaran estos 3 parametros a llenar lo demas ira vacio
    los parametro que estan en este metodo vienen de la api de firebase checar el response
  */
  createUser(nick, email, description) {}

  // Traer la informacion del usuario actual
  getInfoUser(uid) {}

  // Guardar la nueva informacion del usuario cuando se edite sus datos
  // Nota: la descripcion que se editara al final sera la biografia entonces ese sera lo que se debe actualizar
  saveNewInfoUser(
    uid,
    areaKnoledge,
    country,
    dateBorn,
    email,
    gender,
    biography,
    urlSMFB,
    urlSMGitHub,
    urlSMSTwitter,
    urlSMYT
  ) {}
}

export default User;
