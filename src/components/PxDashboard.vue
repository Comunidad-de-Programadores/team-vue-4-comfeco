<template>
  <div class="private">
    <h1>This is a private page</h1>
    <button @click="logOut">LogOut</button>
  </div>
</template>

<script>
import Autenticacion from "@/firebase/auth/autentication.js";

export default {
  name: "private",
  methods: {
    logOut() {
      this.authClass.singOutOfAccount().then(() => {
        this.$router.push("/");
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
