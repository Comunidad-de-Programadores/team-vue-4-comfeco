<template>
  <PxHeader />
  <PxFooter />
  <router-view />
</template>

<script>
// @ is an alias to /src
import PxHeader from "@/components/PxHeader";
import PxFooter from "@/components/PxFooter";

export default {
  components: {
    PxHeader,
    PxFooter,
  },
};
</script>
<style lang="scss">
@import "assets/sass/_base.scss";
</style>
