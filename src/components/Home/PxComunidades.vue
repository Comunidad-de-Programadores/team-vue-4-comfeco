<template>
  <section class="comunity">
    <div class="comunity__img">
      <img :src="imagen" :alt="titulo" />
    </div>
    <div class="comunity__info">
      <div class="comunity__name">
        <h4 v-text="titulo"></h4>
      </div>
      <div class="comunity__btn">
        <a href="#" class="link" @click="openUrl(url)">
          Unirme
          <i class="fas fa-sign-in-alt"></i>
        </a>
      </div>
    </div>
  </section>
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
.comunity {
  display: flex;
  align-items: flex-start;
  padding: 10px 0;
  margin: 0 0 10px 0;
  position: relative;
  border-bottom: 1px solid #ffffff;
  grid-area: comunity;
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
    margin: 0 8px 0 0;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  }
  &__name {
    h4 {
      font-size: 18px;
    }
  }
}
</style>
