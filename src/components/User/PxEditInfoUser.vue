<template>
  <section class="edit__user">
    <section class="edit__user--information">
      <button class="edit__user--close-button">
        <router-link to="/my-account">
          <i class="fas fa-arrow-left"></i>
        </router-link>
      </button>
      <h2>
        Editar perfil
      </h2>
      <form
        class="edit__user--information--form"
        @submit.prevent="saveInformationEditUser"
      >
        <div class="edit__user--information-photo">
          <img
            :src="formEdit.photoURL"
            :alt="'Foto de perfil del usuairo: ' + formEdit.nick"
          />
          <div class="edit__user--information-photo-change">
            <button>
              <i class="fas fa-camera-retro"></i>
            </button>
          </div>
        </div>

        <div class="edit__user--information-group-input two">
          <div class="edit__user--information-input">
            <label for="nick">
              Nick:
            </label>
            <input
              type="text"
              id="nick"
              v-model="formEdit.nick"
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
              v-model="formEdit.email"
              autocomplete="off"
              placeholder="Tu correo"
            />
            <span class="edit__user--information-input-animation"></span>
          </div>
        </div>
        <div class="edit__user--information-group-input three">
          <div class="edit__user--information-input select">
            <label>
              Genero:
            </label>
            <Multiselect
              v-model="formEdit.optionsGender.value"
              v-bind="formEdit.optionsGender"
            ></Multiselect>
          </div>
          <div class="edit__user--information-input">
            <label for="js_select-born">
              Fecha de nacimiento:
            </label>
            <input
              type="date"
              v-model="formEdit.dateBorn"
              id="js_select-born"
            />
          </div>
          <div class="edit__user--information-input select">
            <label for="js_select-born">
              País:
            </label>
            <Multiselect
              v-model="formEdit.optionsCountry.value"
              v-bind="formEdit.optionsCountry"
            ></Multiselect>
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
              v-model="formEdit.newPass"
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
              v-model="formEdit.confirmNewPass"
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
              v-model="formEdit.url_facebook"
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
              v-model="formEdit.url_linkedin"
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
              v-model="formEdit.ulr_github"
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
              v-model="formEdit.url_twitter"
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
              v-model="formEdit.biography"
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
import Multiselect from "@vueform/multiselect";
// Import class autentication
import Autenticacion from "@/firebase/auth/autentication.js";

export default {
  name: "PxEditInfoUser",
  data() {
    return {
      formEdit: {
        nick: "",
        email: "",
        photoURL: "",
        optionsGender: {
          value: 0,
          options: [
            "Elige tu género",
            "Masculino",
            "Femenino",
            "No quiero especificar",
          ],
        },
        dateBorn: "",
        optionsCountry: {
          value: 0,
          options: ["Elije un país"],
        },
        url_facebook: "",
        url_linkedin: "",
        ulr_github: "",
        url_twitter: "",
        biography: "",

        newPass: "",
        confirmNewPass: "",
      },
    };
  },
  components: {
    Multiselect,
  },
  methods: {
    saveInformationEditUser() {},
  },
  computed: {
    async getDataCountry() {
      const API_COUNTRY = "https://restcountries.eu/rest/v2/all";
      const data = await fetch(API_COUNTRY);
      const response = await data.json();
      return response;
    },
    authClass() {
      const auth = new Autenticacion();
      return auth;
    },
  },
  async created() {
    this.getDataCountry.then((data) => {
      data.forEach((element) =>
        this.formEdit.optionsCountry.options.push(element.name)
      );
    });
    const currentUser = await this.authClass.authUser();
    console.log(currentUser);
    if (
      currentUser.providerData[0].providerId === "google.com" ||
      currentUser.providerData[0].providerId === "facebook.com"
    ) {
      this.formEdit.nick = currentUser.displayName;
      this.formEdit.email = currentUser.email;
      this.formEdit.photoURL = currentUser.photoURL;
    } else {
      this.formEdit.nick = currentUser.displayName;
      this.formEdit.email = currentUser.email;
      this.formEdit.photoURL = "../../assets/images/userDefaultImage.png";
    }
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/components/_edit-account.scss";
/*Styles for multiselect*/
</style>
