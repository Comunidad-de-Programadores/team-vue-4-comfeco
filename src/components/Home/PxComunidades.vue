<template>
  <div class="flex comunidad">
    <div class="aside__header">
      <h5>Comunidades</h5>
      <router-link to="/comunidad">
        Ver más
      </router-link>
    </div>
    <div>
      <img class="comunidad__img" :src="imagen" :alt="titulo" />
    </div>
    <div class="comunidad__name">
      <h4 v-text="titulo"></h4>
    </div>
    <div>
      <a class="comunidad__btn" href="#" @click="openUrl(url)">Unirme</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "VComunidad",
  props: {
    imagen: String,
    titulo: String,
    url: String,
  },
  methods: {
    openUrl(url) {
      window.open(url);
    },
  },
};
</script>
<style scoped lang="scss">
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
.flex {
  display: flex;
  margin: auto;
}
.comunidad {
  border-bottom: 1px solid hsl(280, 5, 30);
  padding: 15px;
  &__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 2rem;
  }
  &__name {
    font-weight: 800;
    margin-right: 2rem;
  }
  &__btn {
    color: hsl(280, 50, 50);
    text-decoration: none;

    &:hover {
      color: hsl(280, 50, 30);
      cursor: pointer;
    }
  }
}
</style>
