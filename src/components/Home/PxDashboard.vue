<template>
  <div class="aside">
    <div class="aside__header">
      <h5>Comunidades</h5>
      <router-link to="/comunidad">
        Ver más
      </router-link>
    </div>
    <VComunidad
      v-for="comunidad in comunidades"
      :key="comunidad"
      :imagen="comunidad.logo"
      :titulo="comunidad.titulo"
      :url="comunidad.url"
    ></VComunidad>
  </div>
</template>

<script>
import VComunidad from "@/components/Home/PxComunidades";
export default {
  name: "private",
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
  },
};
</script>
<style lang="scss">
.aside {
  width: 20%;
  height: 35vh;
  margin: 1%;
  padding: 1%;
  background-color: hsl(0, 1, 70);
  color: white;
  overflow: auto;
  &__header {
    margin-bottom: 1em;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
  }
}
</style>
