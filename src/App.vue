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
  data() {
    return {};
  },
  components: {
    PxHeader,
    PxFooter,
  },
  computed: {},
};
</script>
<style lang="scss">
@import "assets/sass/_base.scss";
</style>
