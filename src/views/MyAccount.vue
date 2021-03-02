<template>
  <section class="my-account">
    <PxInsignia />

    <PxEditInfoUser />
  </section>
</template>

<script>
import Autenticacion from "@/firebase/auth/autentication.js";
import firebase from "firebase";
import PxInsignia from "@/components/User/PxInsignia";
import PxEditInfoUser from "@/components/User/PxEditInfoUser";

export default {
  name: "MyAccount",
  components: {
    PxInsignia,
    PxEditInfoUser,
  },
  methods: {    
    async verifiedUser() {
      await this.authClass
        .authUser()
        .then((user) => {
          if (user != null) {
            document.getElementById("js_isLogedOptions").className = "isLogged";
            document.getElementById("js_header").classList.add("bgColor");
          }
        })
        .catch(({ message }) => {
          console.log(message);
        });
    },
  },
  computed: {
    authClass() {
      const auth = new Autenticacion();
      return auth;
    },
  },
  mounted() {
    this.verifiedUser();    
  },
};
</script>

<style scoped lang="scss">
    .my-account {
      padding: 0 16px;
      width: 100%;
    }

@media screen and (min-width: 992px) {
  .my-account {
    margin-top: 96px;
    padding: 0 6%;
  }
}
</style>
