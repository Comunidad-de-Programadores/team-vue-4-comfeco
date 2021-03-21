<template>
  <section class="edit__user">
    <PxLoader />
    <section class="edit__user--information">
      <button class="edit__user--close-button">
        <router-link to="/my-account">
          <i class="fas fa-arrow-left"></i>
        </router-link>
      </button>
      <h2>
        Editar perfil
      </h2>
      <PxAvatarUser />
      <form
        class="edit__user--information--form"
        @submit.prevent="saveInformationEditUser"
      >
        <div class="edit__user--information-group-input two">
          <div class="edit__user--information-input">
            <label for="nick">
              Nick:
            </label>
            <input
              type="text"
              id="nick"
              v-model="formEdit.uNick"
              autocomplete="off"
              placeholder="Tu nick"
            />
            <span class="edit__user--information-input-animation"></span>
          </div>
          <div class="edit__user--information-input">
            <label for="Correo">
              Correo:
            </label>
            <input
              type="text"
              id="Correo"
              v-model="formEdit.uEmail"
              autocomplete="off"
              placeholder="Tu correo"
            />
            <span class="edit__user--information-input-animation"></span>
          </div>
        </div>
        <div class="edit__user--information-group-input three">
          <div class="edit__user--information-input select">
            <label>
              Género:
            </label>
            <select v-model="formEdit.uGender">
              <option disabled value="">Elije tu género</option>
              <option
                v-for="gender in uGender"
                :value="gender.option"
                :key="gender.id"
              >
                {{ gender.option }}
              </option>
            </select>
          </div>
          <div class="edit__user--information-input">
            <label for="js_select-born">
              Fecha de nacimiento:
            </label>
            <input
              type="date"
              v-model="formEdit.uDateBorn"
              id="js_select-born"
            />
          </div>
          <div class="edit__user--information-input select">
            <label for="js_select-born">
              País:
            </label>
            <select v-model="formEdit.uCountry">
              <option disabled value="">Elije tu país</option>
              <option
                v-for="country in uCountry"
                :value="country.option"
                :key="country.id"
              >
                {{ country.option }}
              </option>
            </select>
          </div>
        </div>

        <h2>Mi especialidad:</h2>
        <div class="edit__user--information-group-input knowledge">
          <div class="edit__user--information-input select">
            <label>
              Área de conocimiento:
            </label>
            <select v-model="formEdit.uAreaknowledge">
              <option disabled value="">Elije tu especialidad</option>
              <option
                v-for="knowledge in uAreaknowledge"
                :value="knowledge.option"
                :key="knowledge.id"
              >
                {{ knowledge.option }}
              </option>
            </select>
          </div>
        </div>

        <h2>Cambiar mi contraseña:</h2>
        <div class="edit__user--information-group-input two">
          <div class="edit__user--information-input">
            <label for="js_password">
              Contraseña:
            </label>
            <input
              type="password"
              id="js_password"
              v-model="formEdit.uNewPass"
              autocomplete="off"
              placeholder="Contraseña nueva"
            />
            <span class="edit__user--information-input-animation"></span>
          </div>
          <div class="edit__user--information-input">
            <label for="js_password-repeat">
              Repetir Contraseña:
            </label>
            <input
              type="password"
              id="js_password-repeat"
              v-model="formEdit.uConfirmNewPass"
              autocomplete="off"
              placeholder="Repetir contraseña nueva"
            />
            <span class="edit__user--information-input-animation"></span>
          </div>
        </div>

        <h2>Mis redes sociales:</h2>
        <div class="edit__user--information-group-input social-media">
          <div class="edit__user--information-input">
            <label for="js_social_facebook">
              <i class="fab fa-facebook"></i>
              facebook.com/
            </label>
            <input
              type="text"
              id="js_social_facebook"
              v-model="formEdit.uSocialMediaFacebook"
              autocomplete="off"
              placeholder="Url de facebook"
            />
            <span class="edit__user--information-input-animation-sc"></span>
          </div>
          <div class="edit__user--information-input">
            <label for="js_social_linkedin">
              <i class="fab fa-linkedin"></i>
              linkedin.com/in/
            </label>
            <input
              type="text"
              id="js_social_linkedin"
              v-model="formEdit.uSocialMediaLinkedin"
              autocomplete="off"
              placeholder="Url de linkedin"
            />
            <span class="edit__user--information-input-animation-sc"></span>
          </div>
          <div class="edit__user--information-input">
            <label for="js_social_github">
              <i class="fab fa-github"></i>
              github.com/
            </label>
            <input
              type="text"
              id="js_social_github"
              v-model="formEdit.uSocialMediaGitHub"
              autocomplete="off"
              placeholder="Url de github"
            />
            <span class="edit__user--information-input-animation-sc"></span>
          </div>
          <div class="edit__user--information-input">
            <label for="js_social_twitter">
              <i class="fab fa-twitter"></i>
              Twitter.com/
            </label>
            <input
              type="text"
              id="js_social_twitter"
              v-model="formEdit.uSocialMediaTwitter"
              autocomplete="off"
              placeholder="Url de twitter"
            />
            <span class="edit__user--information-input-animation-sc"></span>
          </div>
        </div>

        <h2>Sobre mi:</h2>
        <div class="edit__user--information-group-input">
          <div class="edit__user--information-input">
            <label for="js_biography">
              Biografía:
            </label>
            <textarea
              id="js_biography"
              v-model="formEdit.uBiography"
              cols="30"
              rows="2"
            ></textarea>
          </div>
        </div>
        <div class="edit__user--information-group-input">
          <button class="button button-primary">
            Guardar cambios
          </button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
import PxAvatarUser from "@/components/UserShow/PxAvatarUser";
import PxLoader from "@/components/Modal/PxLoader";

import firebase from "firebase";
// Import class autentication
import Autenticacion from "@/firebase/auth/autentication.js";
// Import class User
import User from "@/firebase/user/user.js";
// Inicializando firestore
const db = firebase.firestore();
export default {
  name: "PxEditInfoUser",
  components: {
    PxLoader,
    PxAvatarUser,
  },
  data() {
    return {
      uAreaknowledge: [
        {
          id: 0,
          option: "Frontend",
        },
        {
          id: 1,
          option: "Backend",
        },
        {
          id: 2,
          option: "DevOps",
        },
        {
          id: 3,
          option: "Video Game Developers",
        },
        {
          id: 4,
          option: "UI/UX",
        },
        {
          id: 5,
          option: "Database Developer",
        },
        {
          id: 6,
          option: "Cloud Computing",
        },
      ],
      uGender: [
        {
          id: 0,
          option: "Masculino",
        },
        {
          id: 1,
          option: "Femenino",
        },
        {
          id: 2,
          option: "No quiero especificar",
        },
      ],
      uCountry: [],
      formEdit: {
        uAreaknowledge: "",
        uBiography: "",
        uCountry: "",
        uDateBorn: "",
        uEmail: "",
        uGender: "",
        uNick: "",
        uPhoto: "",
        uSocialMediaFacebook: "",
        uSocialMediaGitHub: "",
        uSocialMediaTwitter: "",
        uSocialMediaLinkedin: "",
        uid: "",
        uNewPass: "",
        uConfirmNewPass: "",
      },
    };
  },
  methods: {
    async saveInformationEditUser() {
      const currentUser = await this.authClass.authUser();
      const userId = currentUser.uid;
      let avatar_preview = document.getElementById("js_avatar-preview");
      if (avatar_preview.dataset.src != "") {
        this.formEdit.uPhoto = avatar_preview.dataset.src;
      }
      // Guardar los datos actuales ingresados en el formulario
      this.userClass.saveInformationUser(userId, this.formEdit);
      this.$swal({
        title: "Informacion actualizada satisfactoriamente! 😄",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
  },
  computed: {
    async getDataCountry() {
      try {
        const API_COUNTRY = "https://restcountries.eu/rest/v2/all";
        const data = await fetch(API_COUNTRY);
        const response = await data.json();
        return response;
      } catch (error) {
        console.error(error);
      }
    },
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
    setTimeout(() => {
      document.getElementById("js_overlay-loader").classList.add("active");
      document.getElementById("js_loader").classList.add("active");
    }, 100);

    setTimeout(() => {
      document.getElementById("js_overlay-loader").classList.remove("active");
      document.getElementById("js_loader").classList.remove("active");
    }, 3000);

    const currentUser = await this.authClass.authUser();
    const userId = currentUser.uid;
    const docRef = db.collection("userPersonalInformation").doc(userId);

    // Traer la informacion del usuario
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          this.formEdit.uAreaknowledge = data.uAreaknowledge;
          this.formEdit.uBiography = data.uBiography;
          this.formEdit.uCountry = data.uCountry;
          this.formEdit.uDateBorn = data.uDateBorn;
          this.formEdit.uEmail = data.uEmail;
          this.formEdit.uGender = data.uGender;
          this.formEdit.uNick = data.uNick;
          this.formEdit.uPhoto = data.uPhoto;
          if (
            currentUser.providerData[0].providerId === "google.com" ||
            currentUser.providerData[0].providerId === "facebook.com"
          ) {
            document
              .getElementById("js_avatar-preview")
              .setAttribute("src", currentUser.photoURL);
          } else {
            if (data.uPhoto != "") {
              const storageRef = firebase.storage().ref();
              const spaceRef = storageRef.child(data.uPhoto);
              spaceRef.getDownloadURL().then(function(downloadURL) {
                document
                  .getElementById("js_avatar-preview")
                  .setAttribute("src", downloadURL);
              });
            } else {
              document
                .getElementById("js_avatar-preview")
                .setAttribute("src", "./assets/images/userDefaultImage.png");
            }
          }
          this.formEdit.uSocialMediaFacebook = data.uSocialMediaFacebook;
          this.formEdit.uSocialMediaGitHub = data.uSocialMediaGitHub;
          this.formEdit.uSocialMediaTwitter = data.uSocialMediaTwitter;
          this.formEdit.uSocialMediaLinkedin = data.uSocialMediaLinkedin;
          this.formEdit.uid = data.uid;
          this.formEdit.uNewPass = data.uNewPass;
          this.formEdit.uConfirmNewPass = data.uConfirmNewPass;
        } else {
          this.avatarPreview("");
        }
      })
      .catch((error) => {
        console.error("Error al traer la informacion del documento:", error);
      });

    // LLenar campos de foto de perfil, nick y email en el formulario
    this.formEdit.uNick = currentUser.displayName;
    this.formEdit.uEmail = currentUser.email;

    // Llenar select of country
    this.getDataCountry.then((data) => {
      data.forEach((dataCountry) => {
        const numericCode = dataCountry.numericCode;
        const name = dataCountry.name;
        let objCountry = {
          id: numericCode,
          option: name,
        };
        this.uCountry.push(objCountry);
      });
    });
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/components/_edit-account.scss";
</style>
