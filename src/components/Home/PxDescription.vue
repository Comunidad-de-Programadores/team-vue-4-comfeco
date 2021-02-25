<template>
  <section class="description">
    <h1 class="description__title">{{ title }}</h1>
    <h3 class="description__sub-title">{{ subTitle }}</h3>
    <p class="description__paragraph">{{ paragraph }}</p>
  </section>
</template>

<script>
export default {
  name: "PxDescription",
  data() {
    return {
      title: "Bienvenidos a Comunity Fest and Code",
      subTitle: "¡Conoce gente, aprende y gana!",
      paragraph: `La proxima edicion regresa en 2022, en la cual se plantea involucrar a
                  todos los programadores independientemente del área de conocimiento que se
                  encuentre, todo con un mismo proposito, aprende en comunidad.`,
    };
  },
};
</script>

<style scoped lang="scss">
.description {
  text-align: center;
  margin: 2rem 0 3rem 0;
  &__title {
    letter-spacing: 0.4px;
  }
  &__sub-title {
    margin: 4px 0 0 0;
    font-size: 1.1rem;
    letter-spacing: 0.4px;
  }
  &__paragraph {
    font-size: 17px;
    line-height: 22px;
    font-family: var(--fuente-light);
    color: var(--color-black);
    text-align: left;
    margin: 1.2rem 0 0 0;
  }
}

@media screen and (min-width: 768px) {
  .description {
    &__title {
      font-size: 2.5rem;
    }
    &__sub-title {
      font-size: 1.3rem;
    }
    &__paragraph {
      font-size: 1.2rem;
    }
  }
}
</style>
