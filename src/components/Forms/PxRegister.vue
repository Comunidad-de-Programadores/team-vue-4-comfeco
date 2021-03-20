<template>
  <div class="register bg-primary">
    <div class="form-container glass-container">
      <form
        action
        method="post"
        autocomplete="on"
        @keyup.enter="registrar"
        @submit.prevent="registrar"
      >
        <h2 class="title">Regístrate</h2>
        <section class="error__content" v-if="errors.length">
          <b class="error__content-message">
            Por favor, corrija el(los) siguiente(s) error(es):
          </b>
          <ul class="error__content-list">
            <li
              class="error__content-item"
              v-for="error in errors"
              :key="error.id"
            >
              <span>*</span>
              <span>
                {{ error }}
              </span>
            </li>
          </ul>
        </section>
        <div class="input-group">
          <input
            type="text"
            name="nick"
            id="nick"
            v-model="form.nick"
            class="input-group__input"
            placeholder="Nick"
            autocomplete="off"
          />
        </div>
        <div class="input-group">
          <input
            type="email"
            name="email"
            id="email"
            v-model="form.email"
            class="input-group__input"
            placeholder="Correo electr&oacute;nico"
            autocomplete="off"
          />
        </div>
        <div class="input-group">
          <div class="pass-eye__container">
            <input
              :type="isPwd ? 'password' : 'text'"
              name="password"
              id="password"
              v-model="form.password"
              class="input-group__input"
              placeholder="Contraseña"
              autocomplete="off"
              title="La contraseña debe tener al menos 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos."
            />
            <span
              :class="isPwd ? 'far fa-eye' : 'far fa-eye-slash'"
              @click="isPwd = !isPwd"
            ></span>
          </div>
        </div>
        <div class="input-group">
          <div class="pass-eye__container">
            <input
              :type="isPwdcon ? 'password' : 'text'"
              name="confirm_password"
              id="form.confirm_password"
              v-model="form.confirm_password"
              class="input-group__input"
              placeholder="Confirmar Contraseña"
              autocomplete="off"
              title="La contraseña debe tener al menos 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos."
            />
            <span
              :class="isPwdcon ? 'far fa-eye' : 'far fa-eye-slash'"
              @click="isPwdcon = !isPwdcon"
            ></span>
          </div>
        </div>
        <button
          type="submit"
          @click="createAccount()"
          class="button button-primary"
        >
          Crear cuenta
        </button>
      </form>
      <div class="register-auth-socials">
        <p class="register-auth-socials-text">
          O registrate con:
        </p>
        <div class="auth-socials-buttons">
          <button
            type="button"
            class=" button-socials button-socials__facebook"
            @click="createAccountWithFacebook"
          >
            <i class="fa fa-facebook"></i>
          </button>
          <button
            type="button"
            @click="createAccountWithGoogle"
            class="button-socials button-socials__google "
          >
            <i class="fa fa-google"></i>
          </button>
        </div>
      </div>
      <div class="terms-conditions">
        <p>
          Al resgistrate, estas aceptando los
          <a class="link" @click="modalTerminos()"
            >T&eacute;rminos y condiciones</a
          >, y la
          <a class="link" @click="modalPoliticas()"
            >Pol&iacute;tica de privacidad y protecci&oacute;n de datos</a
          >
          de COMFECO
        </p>
      </div>
      <div class="form-container-options">
        <p class="form-container-options-text">
          ¿Ya tienes tu cuenta?
        </p>
        <button class="button button-secondary">
          <router-link to="/">
            Iniciar sesión
            <i class="fas fa-sign-in-alt"></i>
          </router-link>
        </button>
      </div>
    </div>
  </div>
  <VModal
    :title="titlemodal"
    :txtbody="parrafo"
    :txtbutton="txtboton"
    id="modal"
  ></VModal>
</template>

<script>
// Import toastr
import toastr from "toastr";
// Import class autentication
import Autenticacion from "@/firebase/auth/autentication.js";
// Import class validation
import ValidationForms from "@/validations";
// Import component modal
import VModal from "@/components/Modal/PxModal.vue";

export default {
  name: "PxRegister",
  data() {
    return {
      form: {
        nick: "",
        email: "",
        password: "",
        confirm_password: "",
      },
      titlemodal: "",
      parrafo: "",
      txtboton: "",
      isPwd: true,
      isPwdcon: true,
      errors: [],
    };
  },
  components: {
    VModal,
  },
  methods: {
    async createAccount() {
      try {
        this.errors = [];

        if (!this.form.nick) {
          this.errors.push("El nick es obligatorio.");
        }

        if (!this.form.email) {
          this.errors.push("El correo electrónico es obligatorio.");
        } else if (!this.validationClass.validInput("email", this.form.email)) {
          this.errors.push("El correo electrónico debe ser válido.");
        }

        if (!this.form.password) {
          this.errors.push("El password es obligatorio.");
        } else if (
          !this.validationClass.validInput("pass", this.form.password)
        ) {
          this.errors.push(
            "La contraseña debe tener al menos 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos."
          );
        }

        if (!this.form.confirm_password) {
          this.errors.push("Debe confirmar la contraseña.");
        } else if (this.form.confirm_password != this.form.password) {
          this.errors.push("Las contraseñas no son iguales.");
        }

        if (!this.errors.length) {
          const informationUser = await this.authClass.crearCuentaEmailPass(
            this.form.email,
            this.form.password,
            this.form.nick
          );

          // Verificar cuenta
          this.verifiedUserEmail();

          if (informationUser.emailVerified) {
            this.$router.push("/dashboard");
            toastr.info("Cuenta verificada");
          } else {
            this.$router.push("/");
            this.authClass.singOutOfAccount();
            toastr.info(
              "Por favor revisar su correo, para poder verificar la cuenta"
            );
          }

          this.form.email = "";
          this.form.password = "";
          this.form.confirm_password = "";
          this.form.nick = "";
        }
      } catch (error) {
        console.log(error);
        toastr.error(`Error en el registro - ${error.code}`);
      }
    },
    async createAccountWithFacebook() {
      try {
        const accountFacebookMehotd = await this.authClass.authCuentaFacebook();
        console.log(accountFacebookMehotd);
        if (accountFacebookMehotd.emailVerified) {
          toastr.success(`Bienvenido ${accountFacebookMehotd.displayName}`);
          this.$router.push("/dashboard");
        } else {
          this.$router.push("/");
          // Verificar cuenta al correo con el que se creo la cuenta de facebook
          this.verifiedUserEmail();
          this.authClass.singOutOfAccount();
          toastr.info("Porfavor verificar su cuenta con facebook");
        }
      } catch (error) {
        toastr.error(`Error autenticarse con Facebook - ${error.code}`);
        console.error(error);
      }
    },
    async createAccountWithGoogle() {
      try {
        const accountGoogleMehotd = await this.authClass.authCuentaGoogle();
        if (accountGoogleMehotd.emailVerified) {
          toastr.success(`Bienvenido ${accountGoogleMehotd.displayName}`);
          this.$router.push("/dashboard");
        } else {
          this.authClass.singOutOfAccount();
          toastr.error("Algo salio mal!");
        }
      } catch (error) {
        toastr.error(`Error autenticarse con Google ${error}`);
        console.error(error);
      }
    },
    async verifiedUserEmail() {
      await this.authClass
        .verifiedUser()
        .then(() => {
          toastr.success("Correo enviado satisfactoriamente");
        })
        .catch(({ message }) => {
          console.log(message);
          toastr.error("El correo no se ha enviado ☹");
        });
    },
    modalTerminos() {
      this.titlemodal = "Terminos y Condiciones";
      this.txtboton = "terminos y condiciones";
      this.parrafo = `Los presentes términos y condiciones (en lo sucesivo los "Términos y Condiciones de la Aplicación")
                    contienen los acuerdos que rigen (i) la relación entre Time Tracker de México, S.A. de C.V., o sus filiales o
                    subsidiarias (en lo sucesivo la “Sociedad”), con las personas (en lo sucesivo el o los “Usuario(s)”) que
                    descarguen cualesquier aplicación desarrollada por la Sociedad (en lo sucesivo la o las “Aplicación(es)”), (ii)
                    así como las marcas, los productos y los servicios que preste la Sociedad (en lo sucesivo los “Servicios”). Al
                    descargar la Aplicación, el Usuario deberá manifestar su aceptación de los presentes Términos y Condiciones
                    de la Aplicación a efecto de poder usar la Aplicación, y en caso de que no los acepte, el Usuario deberá de
                    abstenerse de usar la Aplicación.
                    Cualesquier término no definido en los presentes Términos y Condiciones de la Aplicación se entenderán
                    definidos en los Términos y Condiciones del Sitio. Cualquier cuestión no prevista por los Términos y
                    Condiciones de la Aplicación, los Términos y Condiciones del Sitio se aplicarán de forma supletoria. En caso
                    de interpretación o controversia con entre los Términos y Condiciones de la Aplicación y los Términos y
                    Condiciones del Sitio, prevalecerán los últimos sobre los primeros.`;
      let $modal = document.getElementById("modal");
      let $contentModal = document.getElementById("js_contenido-modal");
      $modal.classList.add("visible");
      $contentModal.classList.remove("fadeOut");
      $contentModal.classList.add("fadeIn");
      document.body.classList.add("no-scroll");
    },
    modalPoliticas() {
      this.titlemodal = "Politicas de Privacidad";
      this.txtboton = "politicas de privacidad";
      this.parrafo = `Su registro se eliminara de los registro de COMFECO en caso de compartir información personal y sensible y la sección 4.8 del Acuerdo de distribución . Esta aplicación no estará disponible para los usuarios hasta que presente una actualización compatible. Problema de política: Google Play requiere que los desarrolladores para proporcionar una política de privacidad válida cuando las solicitudes de aplicaciones o manejo de información sensible del usuario o del dispositivo. Sus solicitudes de permisos de aplicaciones sensibles (por ejemplo, cámara, micrófono, cuentas, contactos o teléfono) o datos de usuario, pero no incluye una política de privacidad válido.`;
      let $modal = document.getElementById("modal");
      let $contentModal = document.getElementById("js_contenido-modal");
      $modal.classList.add("visible");
      $contentModal.classList.remove("fadeOut");
      $contentModal.classList.add("fadeIn");
      document.body.classList.add("no-scroll");
    },
  },
  computed: {
    authClass() {
      const auth = new Autenticacion();
      return auth;
    },
    validationClass() {
      const validation = new ValidationForms();
      return validation;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.register {
  .terms-conditions {
    max-width: 280px;
    width: 100%;
    line-height: 20px;
    margin: 10px 0;
  }
  .register-container > * {
    margin-bottom: 10px;
  }
}
.pass-eye__container {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}
.pass-eye__container span {
  position: absolute;
  right: 20px;
}
</style>
