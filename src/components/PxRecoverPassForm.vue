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
        <button type="submit" class="button button-primary">
          Recuperar contraseña
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import Autenticacion from "@/firebase/auth/autentication.js";

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
      await this.authClass
        .recuperarContraseña(this.form.email)
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          const message = error.message;
          alert(message);
          console.error(error);
          alert("Posiblemente el correo que ingreso no es correcto :(");
          this.$router.push("/recover-password");
        });
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

<style scoped lang="scss">
.recover {
  align-items: flex-start;
}
</style>
