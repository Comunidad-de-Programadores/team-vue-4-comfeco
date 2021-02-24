<template>
  <main class="home">
    <PxDescription />
    <PxCarouselSponsors />

    <AppCountdown
      title="Preparate lo bueno esta por venir"
      diaevento="12 24 2021 23:59:59"
    />
    <PxComunidad />
  </main>
</template>

<script>
import PxDescription from "@/components/Home/PxDescription";
import PxComunidad from "@/components/Home/PxComunidades";
import AppCountdown from "@/components/Home/AppCountdown";
import PxCarouselSponsors from "@/components/Home/PxCarouselSponsors";

export default {
  name: "Home",
  components: {
    PxDescription,
    PxCarouselSponsors,
    AppCountdown,
    PxComunidad,
  },
};
</script>

<style scoped lang="scss">
.home {
  padding: 0 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

@media screen and (min-width: 992px) {
}
</style>
