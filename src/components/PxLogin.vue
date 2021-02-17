<template>
  <div class="login bg-primary">
    <div class="form-container glass-container">
      <form
        action
        method="post"
        autocomplete="off"
        @submit.prevent="loginWithEamil"
        novalidate="true"
      >
        <h2 class="title">Iniciar Sesión</h2>
        <p v-if="errors.length">
          <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
          <ul>
            <li v-for="error in errors">{{ error }}</li>
          </ul>
        </p>
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
          <div class="pass-eye__container">
            <input
              :type="isPwd ? 'password' : 'text'"
              name="password"
              id="password"
              v-model="form.password"
              class="input-group__input"
              placeholder="Contraseña"
            />
            <span
              :class="isPwd ? 'far fa-eye' : 'far fa-eye-slash'"
              @click="isPwd = !isPwd"
            ></span>
          </div>
        </div>
        <div class="input-group">
          <div class="label-group__keep-login">
            <input
              type="checkbox"
              class="input-group__check"
              id="remember"
              v-model="form.remember"
            />
            <label class="input-group__check-label" for="remember">
              Mantenerme conectado
            </label>
          </div>
        </div>
        <button type="submit" class="button button-primary" >
          Ingresar
        </button>
      </form>
      <div class="register-auth-socials">
        <p class="register-auth-socials-text">
          Tambien puedes iniciar sesión con tus redes
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
            class="button-socials button-socials__google "
            @click="createAccountWithGoogle"
          >
            <i class="fa fa-google"></i>
          </button>
        </div>
      </div>
      <div class="form-container-options">
        <a
          href="http://"
          class="form-container-options-forgot"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¿Olvidaste tu contraseña?
        </a>
        <button class="button button-secondary">
          <router-link to="/register">
            Reg&iacute;strate
            <i class="fas fa-user-plus"></i>
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Autenticacion from "@/firebase/auth/autentication.js";
import { validationMixin } from 'vuelidate';
import { required, email, minLength } from 'vuelidate/lib/validators';

export default {
  name: "PxLogin",
  data() {
    return {
      form: {
        email: "",
        password: "",        
      },
      remember: false,
      isPwd: true,
      errors: [],
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    loginWithEamil() {
      this.errors = [];

      if (!this.form.email) {
        this.errors.push('El correo electrónico es obligatorio.');
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push('El correo electrónico debe ser válido.');
      }
      if (!this.form.password) {
        this.errors.push("El password es obligatorio.");
      }

      if (!this.errors.length) {
        this.authClass.autEmailPass(this.form.email, this.form.password);
        this.$router.push("/");
        
      }       
      /*
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.form));
      */
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    async loginAccountWithFacebook() {
      this.authClass.authCuentaFacebook();
      this.$router.push("/");
    },
    async loginAccountWithGoogle() {
      this.authClass.authCuentaGoogle();
      this.$router.push("/");
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
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 1rem;
  width: 100%;
  min-height: 100vh;
}
.label-group__keep-login {
  display: flex;
  align-items: center;
  .input-group__check {
    width: 16px;
    height: 16px;
    margin: 0 4px 0 0;
  }
  .input-group__check-label {
    font-size: 14px;
    font-family: var(--fuente-medium);
    letter-spacing: 0.5px;
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
