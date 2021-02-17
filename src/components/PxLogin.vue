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
        <div class="input-group" >
          <input
            type="email"
            name="email"
            id="email"
            v-model="form.email"
            class="input-group__input"
            placeholder="Correo electr&oacute;nico *"
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
              placeholder="Contraseña *"
              title="La contraseña debe tener al menos 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos."
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
        <button type="submit" class="button button-primary">
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
    }
  },
  methods: {
    async loginWithEamil() {
      this.errors = [];

      if (!this.form.email) {
        this.errors.push("El correo electrónico es obligatorio.");
      } else if (!this.validEmail(this.form.email)) {
        this.errors.push("El correo electrónico debe ser válido.");
      }      
      
      if (!this.form.password) {
        this.errors.push("El password es obligatorio.");
      }else if(!this.validPass(this.form.password)){        
        this.errors.push("La contraseña debe tener al menos 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.");
      }

      if (!this.errors.length) {
        const auhEmailPass = await this.authClass.autEmailPass(
          this.form.email,
          this.form.password
        );
        alert(`Bienvenido ${auhEmailPass.displayName}`);
        if (auhEmailPass.displayName != '') {
          this.$router.push("/dashboard");
          alert(`Bienvenido ${auhEmailPass.displayName}`);
        }else{
          alert("datos incorrectos vuelva a intentarlo.");
        }        
      }
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPass: function(pass) {
      var re = /^(?=.*[a-z]){2,}(?=.*[A-Z]){2,}(?=.*\d)(?=.*[$@$!%*?&]){2,}([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
      return re.test(pass);
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
