<template>
  <div class="infouser side__bar-style">
    <PxChargeInfo />
    <div class="infouser__details no-visible" id="js_infouser-details">
      <router-link to="/edit-my-account" class="infouser__edit">
        <i class="far fa-edit"></i>Editar Perfil
      </router-link>
      <div class="infouser__content-image" id="js_infouser__content-image">
        <img
          class="infouser__img"
          id="js_avatar-perfil"
          :src="uPhoto"
          alt="photo profile"
        />
      </div>
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
import PxChargeInfo from "@/components/Modal/PxChargeInfo";
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
  components: {
    PxChargeInfo,
  },
  async created() {
    const currentUser = await this.authClass.authUser();
    const userId = currentUser.uid;
    let docRef = db.collection("userPersonalInformation").doc(userId);
    setTimeout(() => {
      document
        .getElementById("js_infouser-details")
        .classList.remove("no-visible");
      document.getElementById("js_spin-circle").classList.add("hidden");
    }, 1500);
    // Traer la informacion del usuario con un tiempo de 1.5 segundos
    setTimeout(() => {
      docRef
        .get()
        .then((doc) => {
          let data = doc.data();

          if (doc.exists) {
            //console.log("informacion encontrada ->", doc.data());
            this.information = true;
            this.uNick = data.uNick;
            if (
              currentUser.providerData[0].providerId === "google.com" ||
              currentUser.providerData[0].providerId === "facebook.com"
            ) {      
              document.getElementById("js_avatar-perfil").setAttribute("src", currentUser.photoURL);           
            }else{
              if (data.uPhoto != '') {
                const storageRef = firebase.storage().ref();          
                const spaceRef = storageRef.child(data.uPhoto);
                spaceRef.getDownloadURL().then(function(downloadURL) {
                  document.getElementById("js_avatar-perfil").setAttribute("src", downloadURL);
                });
              }            
            }  
            
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
    }, 500);
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/sass/components/_info-user.scss";
</style>
