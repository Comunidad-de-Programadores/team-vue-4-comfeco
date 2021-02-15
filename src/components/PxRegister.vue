<template>
  <div class="register">
    <div class="register-container glass-container">
      <form action method="post" autocomplete="on" @submit.prevent="registrar">
        <h2 class="title">Regístrate</h2>
        <div class="input-group">
          <input
            type="text"
            name="nick"
            id="nick"
            v-model="form.nick"
            :aria-label="nickLabel"
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
        <button type="submit" class="button button-primary">
          Crear cuenta
        </button>
      </form>
      <div class="register-auth-socials">
        <p>O continuar con:</p>
        <div class="auth-socials-buttons">
          <button
            type="submit"
            class="button button-fb button-primary"
            @click="logInWithFacebook"
          >
            <i class="fa fa-facebook"></i>
          </button>
          <button type="submit" class="button button-fb button-primary">
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
      window.FB.login(function (response) {
        if (response.authResponse) {
          alert("logeado");
        } else {
          alert("el usuario cancelo el login");
        }
      });
      return false;
    },
    async initFacebook() {
      window.fbAsyncInit = function () {
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
.register {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 1rem;
  width: 100%;
  min-height: 100vh;
  background: rgb(204, 166, 242);
  background: linear-gradient(
    0deg,
    rgba(204, 166, 242, 1) 0%,
    rgba(57, 15, 100, 1) 100%
  );
  .register-container {
    padding: 1.1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .input-group {
        display: flex;
        flex-direction: column;
        margin: 0.2rem;

        .input-group__input {
          max-width: 490px;
          width: 100%;
          background-color: #f0f0f0;
          margin: 7px 0;
          border-radius: 55px;
          padding: 1.2rem;

          input {
            background: none;
            outline: none;
            border: none;
            line-height: 1;
            font-weight: 600;
            font-size: 1.1rem;
          }
        }
      }
      button {
        margin: 1rem;
        font-weight: 300;
      }
    }
    .register-auth-socials {
      p {
        margin-bottom: 1rem;
      }
      .auth-socials-buttons {
      }
    }
    .terms-conditions{
      width: 300px;
    }
  }
  .register-container > * {
    margin-bottom: 10px;
  }
}
.flex {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal {
  //display: none;
  position: fixed;
  z-index: 1000;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
.contenido-modal {
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
  from {
    top: -500px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}
.close {
  background: hsl(0, 80, 45);
  color: #f2f2f2;
  font-size: 30px;
  width: 5%;
  text-align: center;
  border-radius: 25px;
}
.close:hover {
  background: red;
  cursor: pointer;
}
.modal-header,
.modal-footer {
  padding: 8px 16px;
}
.modal-header {
  border-bottom: 1px solid gray;
}
.modal-footer {
  text-align: center;
}
.txtmodalbody {
  padding-top: 20px;
  text-align: justify;
}
</style>
