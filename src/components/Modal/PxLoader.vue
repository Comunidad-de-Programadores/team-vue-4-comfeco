<template>
  <div class="overlay" id="js_overlay-loader"></div>
  <div class="loader" id="js_loader">
    <div class="loader__wrapper">
      <div class="loader__icon">
        <img src="@/assets/images/tail-spin.svg" alt="Loader..." />
      </div>
      <div class="loader__text">
        Cargando...
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PxLoader",
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: none;
  &.active {
    display: block;
  }
}
.loader {
  z-index: 999;
  padding: 0 1rem;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  max-width: 500px;
  width: 100%;
  height: 300px;
  display: none;
  &.active {
    display: block;
  }
  &__wrapper {
    background: #a662eb;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    height: 100%;
  }
  &__icon {
    margin: 0 0 1.5rem 0;
    img {
      display: block;
      width: 150px;
      height: 150px;
    }
  }
  &__text {
    font-size: 26px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    color: var(--color-black);
    font-family: var(--fuente-bold);
    animation-name: opacityText;
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
}
</style>
