<template>
  <section class="my-account">
    <PxSubMenu />
    <div class="body">
      <PxInfoUser />
      <div class="mainbody">
        <PxInsignia />
      </div>
      <PxEvent />
    </div>
  </section>
</template>

<script>
import Autenticacion from "@/firebase/auth/autentication.js";
import firebase from "firebase";
import PxInsignia from "@/components/User/PxInsignia";
import PxEvent from "@/components/User/PXEvent";
import PxInfoUser from "@/components/User/PxInfoUser";
import PxSubMenu from "@/components/User/PxSubMenu";

export default {
  name: "MyAccount",
  components: {
    PxInsignia,
    PxEvent,
    PxInfoUser,
    PxSubMenu,
  },
  methods: {
    async verifiedUser() {
      await this.authClass.authUser();
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
  padding: 0 0px;
  width: 100%;
}
.body {
  display: grid;
  grid-template-columns: 22% 56% 22%;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
}

@media screen and (min-width: 992px) {
  .my-account {
    margin-top: 96px;
    padding: 0 6%;
  }
}
</style>
