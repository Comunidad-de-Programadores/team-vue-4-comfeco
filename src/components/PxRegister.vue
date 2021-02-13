<template>
  <div class="register">
    <form action method="post" autocomplete="on" @submit.prevent="registrar">
      <div class="input-group">
        <label id="nick-lbl" for="nick" class="input-group__label"> Nick</label>
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
        <label id="email-lbl" for="email" class="input-group__label">
          Correo electr&oacute;nico</label
        >
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
        <label id="password-lbl" for="password" class="input-group__label">
          Contraseña</label
        >
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
        <label
          id="confirm_password-lbl"
          for="confirm_password"
          class="input-group__label"
        >
          Confirmar Contraseña</label
        >
        <input
          type="password"
          name="confirm_password"
          id="form.confirm_password"
          v-model="form.confirm_password"
          class="input-group__input"
          placeholder="Confirmar Contraseña"
        />
      </div>
      <button type="submit" class="button">
        Crear una cuenta
      </button>
    </form>
    <p class="text-center">O resgistrate usando</p>
    <button type="submit" class="button" @click="logInWithFacebook">
      <i class="fa fa-facebook"></i>
      Ingresar con Facebook
    </button>
    <button type="submit" class="button">
      <i class="fa fa-google"></i>
      Ingresar con Google
    </button>
    <p>
      Al resgistrate, estas aceptando los
      <a href="#" class="link">T&eacute;rminos y condiciones</a>, y la
      <a href="#" class="link"
        >Pol&iacute;tica de privacidad y protecci&oacute;n de datos</a
      >
      de COMFECO
    </p>
  </div>
</template>

<script>
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
    };
  },
  methods: {
    registrar() {
      console.log(this.form);
    },
    async logInWithFacebook() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      window.FB.login(function(response) {
        if (response.authResponse) {
          alert("logeado");
        } else {
          alert("el usuario cancelo el login");
        }
      });
      return false;
    },
    async initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "xxxxxxxxxxxxx",
          cookie: true,
          version: "v13.0",
        });
      };
    },
    async loadFacebookSDK(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementsById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
