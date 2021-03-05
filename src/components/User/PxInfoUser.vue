<template>
  <div class="infouser">
    <router-link to="/edit-my-account" class="infouser__edit">
      Editar Perfil
    </router-link>
    <div class="infouser__details">
      <img class="infouser__img" :src="uPhoto" alt="photo profile" />
      <h5 class="infouser__name">{{ uNick }}</h5>
      <div class="information" v-if="information">
        <p class="infouser__profession">{{ uAreaknowledge }}</p>
        <p class="infouser__description">{{ uBiography }}</p>
      </div>
      <div class="information" v-else>
        <p class="infouser__edit">
          Edita tu información para poder actualizar tu carta de presentación
        </p>
      </div>
    </div>
    <div class="infouser__footer"></div>
  </div>
</template>
<script>
import firebase from "firebase";
// Import class autentication
import Autenticacion from "@/firebase/auth/autentication.js";

// Import class User
import User from "@/firebase/user/user.js";
// Inicializando firestore
const db = firebase.firestore();

export default {
  name: "PxInfoUser",
  data() {
    return {
      uNick: "",
      uAreaknowledge: "",
      uBiography: "",
      uPhoto: "",
      information: false,
    };
  },
  computed: {
    authClass() {
      const auth = new Autenticacion();
      return auth;
    },
    userClass() {
      const user = new User();
      return user;
    },
  },
  async created() {
    const currentUser = await this.authClass.authUser();
    const userId = currentUser.uid;
    const docRef = db.collection("userPersonalInformation").doc(userId);
    // Traer la informacion del usuario
    docRef
      .get()
      .then((doc) => {
        let data = doc.data();

        if (doc.exists) {
          console.log("informacion encontrada ->", doc.data());
          this.information = true;
          this.uNick = data.uNick;
          this.uPhoto = data.uPhoto;
          this.uAreaknowledge = data.uAreaknowledge;
          this.uBiography = data.uBiography;
        } else {
          console.warn("No se encontro el documento!");
        }

        if (data.uAreaknowledge === "" || data.uBiography === "") {
          this.information = false;
        }
      })
      .catch((error) => {
        console.error("Error al traer la informacion del documento:", error);
      });
  },
};
</script>
<style lang="scss" scoped>
.infouser {
  //width: 25%;
  height: 60vh;
  padding: 1rem;
  background-image: linear-gradient(
    to left bottom,
    #b43ed5,
    #b148db,
    #ad52e1,
    #aa5ae6,
    #a662eb
  );
  overflow: auto;

  &__edit {
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
  }
  &__details {
    text-align: center;
  }
  &__img {
    background: hsl(0, 1, 90);
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  &__name {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  &__profession {
    font-size: 13px;
    color: gray;
    margin-bottom: 1rem;
  }
  &__description {
    font-size: 13px;
    line-height: 1.5;
  }
}
</style>
