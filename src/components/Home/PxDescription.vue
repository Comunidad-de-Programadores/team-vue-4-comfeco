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

<style scoped lang="scss"></style>
