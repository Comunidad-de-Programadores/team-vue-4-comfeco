<template>
  <div class="my-account__user">
    <PxInfoUser />
    <PxShowInsignia />
    <PxShowEvent />
  </div>
</template>

<script>
import PxShowEvent from "@/components/UserShow/PxShowEvent";
import PxShowInsignia from "@/components/UserShow/PxShowInsignia";
import PxInfoUser from "@/components/UserShow/PxInfoUser";
export default {
  name: "PxMyProfile",
  components: {
    PxInfoUser,
    PxShowEvent,
    PxShowInsignia,
  },
};
</script>

<style lang="scss" scoped>
.my-account__user {
  display: grid;
  grid-template-columns: calc(25% - 16px) 50% calc(25% - 16px);
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  align-items: flex-start;
}
</style>
