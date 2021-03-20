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
  async saveInformationUser(userId, userInformation) {
    try {
      this.db
        .collection("userPersonalInformation")
        .doc(userId)
        .set(userInformation);
      console.log("Informacion guardada");
    } catch (error) {
      console.error("Error al guardar la informacion: ", error);
    }
  }
  // Guardar la nueva informacion del usuario cuando se edite sus datos
  async updateAvatarUser(userId, avatar) {
    try {
      this.db
        .collection("userPersonalInformation")
        .doc(userId)
        .update({ uPhoto: avatar });
      console.log("Informacion guardada");
    } catch (error) {
      console.error("Error al guardar la informacion: ", error);
    }
  }
}

export default User;
