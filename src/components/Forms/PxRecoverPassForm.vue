<template>
  <div class="recover bg-primary">
    <div class="form-container glass-container">
      <form
        action
        method="post"
        autocomplete="off"
        @submit.prevent="recoverPassword"
        novalidate="true"
      >
        <h2 class="title">Recuperar contraseña</h2>
        <p class="recover__text">
          Te enviaremos un correo electonico con un enlace privado para que
          reasignes tu contraseña. Este enlace será valido por un tiempo
          limitado.
        </p>
        <div class="input-group">
          <input
            type="email"
            name="email"
            id="email"
            v-model="form.email"
            class="input-group__input"
            placeholder="Correo electr&oacute;nico *"
          />
        </div>
        <section class="recover__actions">
          <button type="submit" class="button button-primary">
            Recuperar contraseña
          </button>
          <router-link to="/" class="link">
            Iniciar sesión
          </router-link>
        </section>
      </form>
    </div>
    <PxLoader />
  </div>
</template>

<script>
// Import toastr
import toastr from "toastr";
// Import class autentication
import Autenticacion from "@/firebase/auth/autentication.js";
// Import class validation
import ValidationForms from "@/validations";
import PxLoader from "@/components/Modal/PxLoader";

export default {
  name: "PxRecoverPassForm",
  data() {
    return {
      form: {
        email: "",
      },
    };
  },
  methods: {
    async recoverPassword() {
      if (this.validationClass.validInput("email", this.form.email)) {
        await this.authClass
          .recuperarContraseña(this.form.email)
          .then(() => {
            const $overlayLoader = document.getElementById("js_overlay-loader");
            const $modalLoader = document.getElementById("js_loader");
            $overlayLoader.classList.add("active");
            $modalLoader.classList.add("active");

            setTimeout(() => {
              this.$swal({
                title: "Correo enviado satisfactoriamente! 😄",
                icon: "success",
                confirmButtonText: "OK",
              });
            }, 2000);
            setTimeout(() => {
              this.$router.push("/");
            }, 2500);
          })
          .catch((error) => {
            const message = error.message;
            console.error(message);
            this.$swal({
              title: "Error ☹",
              text: "Posiblemente el correo que ingreso  es incorrecto",
              icon: "error",
              confirmButtonText: "OK",
            });
            this.$router.push("/recover-password");
          });
      } else {
        toastr.error("El correo electrónico debe ser válido.");
      }
    },
  },
  components: {
    PxLoader,
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

<style scoped lang="scss">
.recover {
  align-items: flex-start;
  &__text {
    color: var(--color-white);
    margin: 6px 0 10px 0;
    text-align: justify;
    line-height: 18px;
    letter-spacing: 0.3px;
  }
  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    .button.button-primary {
      max-width: 230px;
      width: 100%;
    }
  }
}

@media screen and (min-width: 768px) {
  .recover {
    &__actions {
      flex-direction: row;
    }
  }
}
</style>
