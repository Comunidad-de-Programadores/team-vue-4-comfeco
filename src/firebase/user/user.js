import firebase from "firebase";

class User {
  constructor() {
    this.db = firebase.firestore();
  }

  // Traer la informacion del usuario actual
  async getInfoUser(docrefId) {
    try {
      const docRef = await this.db
        .collection("userPersonalInformation")
        .doc(docrefId);
      const data = await docRef.get();
      const response = data.data();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  // Guardar la nueva informacion del usuario cuando se edite sus datos
  // Nota: la descripcion que se editara al final sera la biografia entonces ese sera lo que se debe actualizar
  async updateInformationUser(uId, userInformation) {
    try {
      const dbCollection = await this.db
        .collection("userPersonalInformation")
        .doc(uId)
        .update(userInformation);
      return dbCollection;
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  }
}

export default User;
