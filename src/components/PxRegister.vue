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
  <div class="modal" id="modalTerminoCondiciones">
    <div class="flex" id="flex">
      <div class="contenido-modal">
        <div class="modal-header flex">
          <h2>Terminos y Condiciones</h2>
          <span class="close" id="close">&times;</span>
        </div>
        <div class="modal-body">
          <p class="txtmodalbody">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sit aperiam amet vero, dolorum fuga labore quibusdam facilis deleniti. Nemo provident commodi tempore corrupti, esse ipsa incidunt earum necessitatibus error.</p>
        </div>
        <div class="modal-footer">
            <a href="#">Acepto los terminos</a>
        </div>
      </div>
    </div>
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
        title_modal: "Terminos y Condiciones",
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
<style scoped lang="scss">
.flex{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal{
  //display: none;
  position: fixed;
  z-index: 1000;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
}
.contenido-modal{
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  margin: auto;
  width: 40%;
  //height: 60%;
  padding: 15px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.946);
  animation: modal 1.2s;
}
@keyframes modal {
  from{top:-500px; opacity: 0;}
  to{top:0; opacity: 1;}
} 
.close{
  background: hsl(0, 80, 45);
  color: #f2f2f2;
  font-size: 30px;
  width: 5%;
  text-align: center;
  border-radius: 25px;
}
.close:hover{
  background: red ;
  cursor: pointer;
}
.modal-header, .modal-footer{
  padding: 8px 16px;
}
.modal-header{
  border-bottom:1px solid gray ;
}
.modal-footer{
  text-align: center;
}
.txtmodalbody{
  padding-top: 20px;
  text-align: justify;
}
</style>
