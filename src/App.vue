<template>
  <PxHeader />
  <router-view />
  <PxFooter />
</template>

<script>
// @ is an alias to /src
// @ is an alias to /src import PxFooter from "@/components/PxFooter";
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
