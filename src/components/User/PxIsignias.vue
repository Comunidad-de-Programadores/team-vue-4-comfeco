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
        <h4 class="insignias__title--insignia">{{ insignia.titulo }}</h4>
        <h5 class="insignias__title--insignia">Descripci&oacute;n</h5>
        <p>{{ insignia.desc }}</p>
        <span class="insignias__line"></span>
        <h5 class="insignias__title--insignia">¿Como ganarla?</h5>
        <p>{{ insignia.ganarla }}</p>
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
          logo: "./assets/images/sociable.webp",
          titulo: "Sociable",
          desc: "Esta insignia es por ser sociable.",
          ganarla: "Para ganarla debes completar tu informacion personal.",
        },
        {
          id: 2,
          logo: "./assets/images/colaborador.webp",
          titulo: "Colaborador",
          desc: "En mérito por haber participado en eventos.",
          ganarla:
            "Para ganar esta insignia debes participar en por lo menos en dos eventos.",
        },
        {
          id: 3,
          logo: "./assets/images/vuejslogo.jpg",
          titulo: "Vue JS",
          desc: "Lorem ipsum dolor sit amet, consectetur.",
          ganarla:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
        },
        {
          id: 4,
          logo: "./assets/images/angularLogo.jpeg",
          titulo: "Angular",
          desc: "Lorem ipsum dolor sit amet, consectetur.",
          ganarla:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
        },
        {
          id: 5,
          logo: "./assets/images/reactLogo.png",
          titulo: "React JS",
          desc: "Lorem ipsum dolor sit amet, consectetur.",
          ganarla:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.insignias {
  margin: 13rem auto 2rem;
  &__title {
    color: #000;
    margin: 2rem auto;
    text-align: center;
    &--insignia {
      margin: 1rem auto;
    }
  }
  &__body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 16px;
    align-items: flex-start;
  }
  &__content {
    background: #cca6f2;
    padding: 2rem 1rem;
    text-align: center;
    transition: var(--transition);
    > p {
      height: 70px;
      overflow: hidden;
      letter-spacing: 0.5px;
      line-height: 18px;
    }
    &:hover {
      box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.2);
      background: #cb8ce2;
      .insignias__img {
        transform: rotateY(360deg);
      }
    }
  }
  &__line {
    display: block;
    width: 100%;
    height: 2px;
    background: var(--color-white);
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
    transition: 0.5s ease-in-out all;
  }
}
@media screen and (min-width: 992px) {
  .insignias {
    &__body {
      grid-template-columns: 24% 24% 24% 24%;
    }
  }
}
</style>
