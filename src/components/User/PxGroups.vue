<template>
  <section class="groups">
    <h2>Grupos</h2>
    <section class="groups__layout">
      <PxGroupSideBar />

      <div class="content__filter-grid">
        <PxGroupFilter />
        <PxGroupCards />
      </div>
    </section>
  </section>
</template>

<script>
import PxGroupSideBar from "@/components/UserShow/PxGroupSideBar";
import PxGroupCards from "@/components/UserShow/PxGroupCards";
import PxGroupFilter from "@/components/UserShow/PxGroupFilter";

export default {
  name: "PxGroups",
  components: {
    PxGroupSideBar,
    PxGroupFilter,
    PxGroupCards,
  },
};
</script>

<style lang="scss" scoped>
.groups {
  margin: 180px 0 30px;
  h2 {
    color: var(--color-black);
    text-align: center;
  }
}

@media screen and (min-width: 992px) {
  .groups {
    margin: 200px 0 4rem;
    &__layout {
      display: flex;
      align-items: flex-start;
      margin: 1rem 0 0 0;
    }
    .content__filter-grid {
      width: calc(100% - 300px);
    }
  }
}
</style>
