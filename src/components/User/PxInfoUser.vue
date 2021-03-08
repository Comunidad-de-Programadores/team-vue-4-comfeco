<template>
  <div class="infouser">
    <router-link to="/edit-my-account" class="infouser__edit">
      <i class="far fa-edit"></i>Editar Perfil
    </router-link>
    <div class="infouser__details">
      <img class="infouser__img" :src="uPhoto" alt="photo profile" />
      <h5 class="infouser__name">{{ uNick }}</h5>
      <div class="information" v-if="information">
        <p class="infouser__profession">{{ uAreaknowledge }}</p>
        <p class="infouser__description">{{ uBiography }}</p>
        <div class="infouser__footer">
          <div class="infouser__footer-social-media">
            <a :href="uSocialMediaFacebook" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
          <div class="infouser__footer-social-media">
            <a :href="uSocialMediaGitHub" target="_blank">
              <i class="fab fa-github-square"></i>
            </a>
          </div>
          <div class="infouser__footer-social-media">
            <a :href="uSocialMediaLinkedin" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div class="infouser__footer-social-media">
            <a :href="uSocialMediaTwitter" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="information" v-else>
        <p class="infouser__info-edit">
          Edita tu información para poder actualizar tu carta de presentación:
        </p>
        <p class="infouser__pre-title">Agregar información sobre ti:</p>
        <ul class="infouser__pre">
          <li>Especialidad</li>
          <li>Todas las redes sociales</li>
          <li>Biografía</li>
        </ul>
      </div>
    </div>
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
      uPhoto: "../../assets/images/userDefaultImage.png",
      uSocialMediaFacebook: "",
      uSocialMediaGitHub: "",
      uSocialMediaLinkedin: "",
      uSocialMediaTwitter: "",
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
          this.uSocialMediaFacebook = `https://www.facebook.com/${data.uSocialMediaFacebook}`;
          this.uSocialMediaGitHub = `https://github.com/${data.uSocialMediaGitHub}`;
          this.uSocialMediaLinkedin = `https://www.linkedin.com/in/${data.uSocialMediaLinkedin}`;
          this.uSocialMediaTwitter = `https://twitter.com/${data.uSocialMediaTwitter}`;
        } else {
          console.log("No se encontro el documento!");
        }

        if (doc.exists) {
          if (
            data.uAreaknowledge === "" ||
            data.uBiography === "" ||
            data.uSocialMediaFacebook === "" ||
            data.uSocialMediaGitHub === "" ||
            data.uSocialMediaLinkedin === "" ||
            data.uSocialMediaTwitter === ""
          ) {
            this.information = false;
          }
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
  padding: 1rem;
  background-image: linear-gradient(
    to left bottom,
    #b43ed5,
    #b148db,
    #ad52e1,
    #aa5ae6,
    #a662eb
  );
  border-radius: 20px;
  &__pre {
    list-style: initial;
    padding: 0 10px 0 20px;
    text-align: left;
    li {
      font-family: var(--fuente-medium);
      letter-spacing: 0.5px;
      color: var(--color-black);
      font-size: 16px;
      margin: 0 0 6px 0;
    }
  }
  &__pre-title {
    text-align: left;
    margin: 5px 0 10px 0;
    font-size: 18px;
    font-family: var(--fuente-bold);
  }
  &__edit {
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    color: var(--color-white);
    margin: 0 0 10px 0;
    transition: var(--transition);
    i {
      margin: 0 4px 0 0;
    }
    &:hover {
      color: var(--color-primary);
    }
  }
  &__details {
    text-align: center;
    max-width: 420px;
    width: 100%;
    margin: 0 auto;
  }
  &__img {
    background: hsl(0, 1, 90);
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
  }
  &__name {
    margin: 14px 0 0.5rem 0;
    font-size: 22px;
    color: var(--color-black);
  }
  &__profession {
    font-size: 16px;
    color: var(--color-black-2);
    font-family: var(--fuente-bold);
    margin-bottom: 1rem;
  }
  &__description {
    font-size: 13px;
    line-height: 1.5;
  }
  &__info-edit {
    font-size: 15px;
    color: #ffffff;
    font-family: var(--fuente-light);
    letter-spacing: 0.2px;
    line-height: 18px;
  }
  &__footer {
    margin: 12px 0 0;
    padding: 5px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    border-top: 2px solid var(--color-primary);
    &-social-media {
      height: 40px;
      margin: 5px;
      border-radius: 50%;
      border: 1px solid #ffffff;
      width: 40px;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        color: var(--color-white);
        outline: none;
        text-decoration: none;
        i {
          font-size: 20px;
          color: var(--color-black);
        }
      }
      &:hover {
        background: var(--color-white);
      }
    }
  }
}
</style>
