<template>
  <div class="login bg-primary">
    <div class="form-container glass-container">
      <form action method="post" autocomplete="on" @submit.prevent="login">
        <h2 class="title">Ingresar</h2>
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
        <div class="row login-sets">
          <div class="col">
            <a href="http://" target="_blank" rel="noopener noreferrer">¿Olvidaste tu contraseña?</a>
          </div>
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
      <p class="text-center">Tambien puedes iniciar con tus redes</p>
    <div class="register-auth-socials">
        <div class="auth-socials-buttons">
          <button
            type="submit"
            class=" button-socials button-socials__facebook"
            @click="logInWithFacebook"
          >
            <i class="fa fa-facebook"></i>
          </button>
          <button type="submit" class="button-socials button-socials__google ">
            <i class="fa fa-google"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PxLogin",
  data() {
    return {
      form: {
        email: "",
        password: "",
        remember: false,
      },
      isPwd: true,
    };
  },
  methods: {
    login() {
      console.log(this.form);
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
}
.pass-eye__container {
  display: flex;
  align-items: center;
  position: relative;
}

.pass-eye__container span {
  position: absolute;
  right: 20px;
}
.login-sets{
  a, label{
    font-size: 12px;
    margin: 10px;
  }
  a{
    text-decoration: none;
  }
  label{
    margin-left: 2px;
  }
}
</style>
