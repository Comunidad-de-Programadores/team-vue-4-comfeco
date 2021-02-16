<template>
  <div class="register bg-primary">
    <div class="form-container glass-container">
      <form action method="post" autocomplete="on" @submit.prevent="registrar">
        <h2 class="title">Regístrate</h2>
        <div class="input-group">
          <input
            type="text"
            name="nick"
            id="nick"
            v-model="form.nick"
            class="input-group__input"
            placeholder="Nick"
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
          />
        </div>
        <div class="input-group">
          <input
            type="password"
            name="password"
            id="password"
            v-model="form.password"
            class="input-group__input"
            placeholder="Contraseña"
          />
        </div>
        <div class="input-group">
          <input
            type="password"
            name="confirm_password"
            id="form.confirm_password"
            v-model="form.confirm_password"
            class="input-group__input"
            placeholder="Confirmar Contraseña"
          />
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
            type="submit"
            class=" button-socials button-socials__facebook"
            @click="createAccountWithFacebook"
          >
            <i class="fa fa-facebook"></i>
          </button>
          <button
            type="submit"
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
          <a href="#" class="link">T&eacute;rminos y condiciones</a>, y la
          <a href="#" class="link"
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
          <router-link to="/login">
            Iniciar sesión
            <i class="fas fa-sign-in-alt"></i>
          </router-link>
        </button>
      </div>
    </div>
  </div>
  <VModal :title="titlemodal"></VModal>
</template>

<script>
import VModal from "@/components/PxModal.vue";
import Autenticacion from "@/firebase/auth/autentication.js";

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
      titlemodal: "Terminos y Condiciones",
    };
  },
  components: {
    VModal,
  },
  methods: {
    async createAccount() {
      this.authClass.crearCuentaEmailPass(
        this.form.email,
        this.form.password,
        this.form.nick
      );
    },
    async createAccountWithFacebook() {
      this.authClass.authCuentaFacebook();
    },
    async createAccountWithGoogle() {
      this.authClass.authCuentaGoogle();
    },
  },
  computed: {
    authClass() {
      const auth = new Autenticacion();
      return auth;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 1rem;
  width: 100%;
  min-height: 100vh;

  .terms-conditions {
    max-width: 280px;
    width: 100%;
    line-height: 20px;
    margin: 10px 0;
    .link {
      color: var(--color-primary);
      outline: none;
      letter-spacing: 0.5px;
      font-weight: bold;
      &:hover {
        color: var(--color-white);
      }
    }
  }
  .register-container > * {
    margin-bottom: 10px;
  }
}
</style>
