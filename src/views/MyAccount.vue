<template>
  <section class="my-account">
    <PxInsignia />

    <PxEditInfoUser />
  </section>
</template>

<script>
import PxInsignia from "@/components/User/PxInsignia";
import PxEditInfoUser from "@/components/User/PxEditInfoUser";

export default {
  name: "MyAccount",
  components: {
    PxInsignia,
    PxEditInfoUser,
  },
};
</script>

<style scoped lang="scss"></style>
