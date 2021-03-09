<template>
  <div class="insignias">
    <h2 class="insignias__title">Mis Insignias</h2>
    <div class="insignias__body">
      <section
        v-for="insignia in insignias"
        :key="insignia.id"
        class="insignias__content"
      >
        <div
          class="insignias__img"
          :style="{ backgroundImage: 'url(' + insignia.logo + ')' }"
        ></div>
        <h4 class="insignias__title--insignia">{{insignia.titulo}}</h4>
        <h5  class="insignias__title--insignia">Descripci&oacute;n</h5>
        <p>{{insignia.desc}}</p>
        <hr>
        <h5  class="insignias__title--insignia">¿Como ganarla?</h5>
        <p>{{insignia.ganarla}}</p>          
      </section>
    </div>    
  </div>
</template>
<script>
export default {
  name: "PxlInsignias",
  data() {
    return {
      insignias: [
        {
          id: 1,
          logo: "./assets/images/vuejslogo.jpg",
          titulo: "Sociable",
          desc: "esta insignia es por ser sociable.",
          ganarla: "para ganarla debes completar tu perfil de usuario.",
        },
        {
          id: 2,
          logo: "./assets/images/vuejslogo.jpg",
          titulo: "VueJS en Español",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
          ganarla: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat",
        },
        {
          id: 3,
          logo: "./assets/images/reactLogo.png",
          titulo: "Angular español",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
          ganarla: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
        },
        {
          id: 4,
          logo: "./assets/images/angularLogo.jpeg",
          titulo: "React Js Español Latino",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.",
          ganarla: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.insignias {
  margin: 13rem auto 1rem;
  &__title {
    color: #000;
    margin: 2rem auto;
    text-align: center;
    &--insignia{
      margin: 1rem auto;
    }
  }
  &__body {
    display: grid;
    grid-template-columns: 24% 24% 24% 24%;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    align-items: flex-start;
  }
  &__content {
    background: #dab6e7;
    margin-right: 5%;
    padding: 3rem 2rem 2rem;
    text-align: center;
  }
  &__img {
    margin: 0 16px 6px 0;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    width: 125px;
    height: 125px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
  }
}
</style>  