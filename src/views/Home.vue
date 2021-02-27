<template>
  <main class="home">
    <PxCarouselTeamLeaders />

    <PxCarouselSponsors />

    <AppCountdown
      title="Preparate lo bueno esta por venir"
      diaevento="12 24 2021 23:59:59"
    />

    <PxComunidad />
  </main>
</template>

<script>
import PxComunidad from "@/components/Home/PxComunidades";
import AppCountdown from "@/components/Home/AppCountdown";
import PxCarouselSponsors from "@/components/Home/PxCarouselSponsors";
import PxCarouselTeamLeaders from "@/components/Home/PxCarouselTeamLeaders";

export default {
  name: "Home",
  components: {
    PxCarouselSponsors,
    PxCarouselTeamLeaders,
    AppCountdown,
    PxComunidad,
  },
};
</script>

<style scoped lang="scss">
.home {
  padding: 0 16px;
  width: 100%;
}

@media screen and (min-width: 992px) {
  .home {
    margin-top: 96px;
    padding: 0 6%;
  }
}

@media screen and (min-width: 992px) {
  .home {
    display: grid;
    grid-template-columns: 375px calc(100% - 400px);
    grid-template-rows: auto;
    grid-template-areas:
      "comunity leaders"
      ". sponsors"
      ". countDown";
    grid-column-gap: 1.5rem;
  }
}
</style>
