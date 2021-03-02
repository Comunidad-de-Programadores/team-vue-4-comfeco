<template>
  <section class="my-account">
    <PxInsignia />

    <PxEditInfoUser />
    <PxEvent/>
  </section>
</template>

<script>
import PxInsignia from "@/components/User/PxInsignia";
import PxEditInfoUser from "@/components/User/PxEditInfoUser";
import PxEvent from "@/components/User/PXEvent";

export default {
  name: "MyAccount",
  components: {
    PxInsignia,
    PxEditInfoUser,
    PxEvent,
  },
};
</script>

<style scoped lang="scss"></style>
