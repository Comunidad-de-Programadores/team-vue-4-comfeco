<template>
  <div id="nav">
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Reg&iacute;strate</router-link>
  </div>
  <router-view />
  <PxFooter />
</template>
<script>
// @ is an alias to /src
import PxFooter from "@/components/PxFooter";

export default {
  name: "app",
  components: {
    PxFooter,
  },
};
</script>
<style lang="scss">
@import "assets/sass/_base.scss";
</style>
