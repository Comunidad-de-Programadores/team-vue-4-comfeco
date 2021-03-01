<template>
  <section class="comunity" id="js_comunity">
    <div class="comunity__aside">
      <h5 class="comunity__title">Comunidades</h5>
      <router-link to="/comunidad" class="link">
        Ver más
        <i class="fas fa-chevron-right"></i>
      </router-link>
    </div>
    <section
      v-for="comunity in comunidades"
      :key="comunity.id"
      class="comunity__card"
    >
      <div
        class="comunity__img"
        :style="{ backgroundImage: 'url(' + comunity.logo + ')' }"
      ></div>
      <div class="comunity__info">
        <div class="comunity__name">
          <h4>{{ comunity.titulo }}</h4>
        </div>
        <div class="comunity__btn">
          <a href="#" class="link" @click="openUrl(comunity.url)">
            Unirme
            <i class="fas fa-sign-in-alt"></i>
          </a>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: "PxComunidad",
  data() {
    return {
      comunidades: [
        {
          id: 1,
          logo: "./assets/images/vuejslogo.jpg",
          titulo: "VueJS en Español",
          url: "https://www.facebook.com/groups/vue.es",
        },
        {
          id: 2,
          logo: "./assets/images/reactLogo.png",
          titulo: "Angular español",
          url: "https://www.facebook.com/groups/dev.angular",
        },
        {
          id: 3,
          logo: "./assets/images/angularLogo.jpeg",
          titulo: "React Js Español Latino",
          url: "https://www.facebook.com/groups/reactjslatino",
        },
      ],
    };
  },
  methods: {
    openUrl(url) {
      window.open(url);
    },
  },
};
</script>
<style scoped lang="scss">
.comunity {
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
  grid-area: comunity;
  transition: var(--transition);
  &__card {
    display: flex;
    align-items: flex-start;
    padding: 10px 0;
    margin: 0 0 10px 0;
    position: relative;
    border-bottom: 1px solid #ffffff;
  }
  &__aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    margin: 0 0 1rem 0;
  }
  &__title {
    color: var(--color-white);
    font-size: 1.2rem;
  }
  &__info {
    .link {
      position: absolute;
      bottom: 10px;
      right: 0;
      i {
        font-size: 14px;
      }
    }
  }
  &__img {
    margin: 0 16px 0 0;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    width: 50px;
    height: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__name {
    h4 {
      font-size: 18px;
    }
  }
}
@media screen and (min-width: 992px) {
  .comunity {
    max-height: 410px;
    overflow: auto;
  }
}
</style>
