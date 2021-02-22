<template>
  <main class="home">
    <section class="comunity__card">
      <div class="comunity__aside">
        <h5 class="comunity__title">Comunidades</h5>
        <router-link to="/comunidad" class="link">
          Ver más
          <i class="fas fa-chevron-right"></i>
        </router-link>
      </div>
      <VComunidad
        v-for="comunidad in comunidades"
        :key="comunidad"
        :imagen="comunidad.logo"
        :titulo="comunidad.titulo"
        :url="comunidad.url"
      ></VComunidad>
    </section>
    <AppCountdown
      title="Preparate lo bueno esta por venir"
      diaevento="12 24 2021 23:59:59"
    />
  </main>
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
          titulo: "Angular español",
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

<style scoped lang="scss">
.home {
  padding: 0 16px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.comunity {
  &__card {
    background-image: linear-gradient(
      to left bottom,
      #b43ed5,
      #b148db,
      #ad52e1,
      #aa5ae6,
      #a662eb
    );
    padding: 1rem 1.8rem;
    border-radius: 4px;
  }
  &__aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
  }
  &__title {
    color: var(--color-white);
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 992px) {
  .home {
    padding: 0;
    display: grid;
    grid-template-columns: 375px 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "comunity principal "
      "comunity principal "
      ". principal ";
  }
}
</style>
