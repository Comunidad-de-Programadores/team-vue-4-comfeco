<template>
  <header class="header">
    <section class="header__logo">
      <router-link to="/home">
        <img
          src="@/assets/images/Logo-comfeco-opción-1.png"
          alt="Logo comfeco opcion 1"
        />
      </router-link>
    </section>
  </header>
</template>

<script>
export default {
  name: "PxHeader",
};
</script>

<style scoped lang="scss">
.header {
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 1rem;
  &__logo {
    img {
      display: inline-block;
      width: 130px;
    }
  }
}
</style>
