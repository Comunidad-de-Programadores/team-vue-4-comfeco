<template>
  <section class="view-dashboard">
    <PxDashboard />
    <VComunidad
      v-for="comunidad in comunidades"
      :key="comunidad"
      :imagen="comunidad.logo"
      :titulo="comunidad.titulo"
      :url="comunidad.url"
    ></VComunidad>
    <AppCountdown
      title="Preparate lo bueno esta por venir"
      diaevento="12 24 2021 23:59:59"
    />
  </section>
</template>

<script>
import VComunidad from "@/components/Home/PxComunidades";
import AppCountdown from "@/components/Home/AppCountdown";

export default {
  name: "Home",
  data() {
    return {
      comunidades: [
        {
          logo: "https://picsum.photos/50/50",
          titulo: "VueJS en Español",
          url: "https://www.facebook.com/groups/vue.es",
        },
        {
          logo: "https://picsum.photos/50/50",
          titulo: "angular español",
          url: "https://www.facebook.com/groups/dev.angular",
        },
        {
          logo: "https://picsum.photos/50/50",
          titulo: "React Js Español Latino",
          url: "https://www.facebook.com/groups/reactjslatino",
        },
      ],
    };
  },
  components: {
    VComunidad,
    AppCountdown,
  },
};
</script>

<style scoped lang="scss"></style>
