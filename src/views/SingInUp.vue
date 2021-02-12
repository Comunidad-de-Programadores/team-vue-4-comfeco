<template>
  <div class="home">
    <PxLogin />
    <PxFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import PxLogin from "@/components/PxLogin";
import PxFooter from "@/components/PxFooter";

export default {
  name: "Home",
  components: {
    PxLogin,
    PxFooter,
  },
};
</script>
