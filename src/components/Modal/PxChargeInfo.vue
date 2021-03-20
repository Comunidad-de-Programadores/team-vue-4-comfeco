<template>
  <div class="spin-circle" id="js_spin-circle">
    <img src="@/assets/images/spinning-circles.svg" alt="SPIN CIRCLE" />
    <p>Cargando informacion</p>
  </div>
</template>

<script>
export default {
  name: "PxChargeInfo",
};
</script>

<style lang="scss" scoped>
.spin-circle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    display: block;
    width: 50px;
    height: 50px;
  }
  p {
    color: var(--color-black);
    font-size: 15px;
    font-family: var(--fuente-bold);
    margin: 10px 0 0 0;
  }
  &.hidden {
    display: none;
  }
}
</style>
