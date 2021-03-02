<template>
  <section class="edit__user">
    <section class="edit__user--information">
      <button class="edit__user--close-button">
        <i class="fas fa-arrow-left"></i>
      </button>
      <h2>
        Editar perfil
      </h2>
      <form action="" class="edit__user--information--form">
        <div class="edit__user--information-photo">
          <img src="@/assets/images/userDefaultImage.png" alt="Perfil User" />
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
              autocomplete="off"
              placeholder="Tu correo"
            />
            <span class="edit__user--information-input-animation"></span>
          </div>
        </div>
        <div class="edit__user--information-group-input three">
          <div class="edit__user--information-input">
            <label>
              Genero:
            </label>
            <select id="js_select-gender">
              <option value="0">Elige tu género</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="NA">No quiero especificar</option>
            </select>
          </div>
          <div class="edit__user--information-input">
            <label for="js_select-born">
              Fecha de nacimiento:
            </label>
            <input type="date" id="js_select-born" />
          </div>
          <div class="edit__user--information-input">
            <label for="js_select-born">
              País:
            </label>
            <select id="js_select-country">
              <option value="0">Elije tu país</option>
              <option value="0">Perú</option>
              <option value="0">Costa Rica</option>
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
            <textarea id="js_biography" cols="30" rows="2"></textarea>
          </div>
        </div>
        <div class="edit__user--information-group-input">
          <button class="button button-primary">
            Guardar cambios
          </button>
          <Multiselect v-model="value" :options="options" />
        </div>
      </form>
    </section>
  </section>
</template>

<script>
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
export default {
  name: "PxEditInfoUser",
  data() {
    return {
      value: "Prueba",
      options: ["Batman", "Robin", "Joker"],
    };
  },
  components: {
    Multiselect,
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/components/_edit-account.scss";
</style>
