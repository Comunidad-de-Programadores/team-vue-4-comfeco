<template>
  <div class="evento side__bar-style">
    <div class="evento__header">
      <p class="side__bar-style-title">Eventos de tu Interes</p>
      <router-link to="/events" class="evento-link">
        <i class="fas fa-eye"></i>
        Ver más
      </router-link>
    </div>
    <div class="evento__body">
      <img
        class="evento__body__img"
        src="@/assets/images/Logo-comfeco-opción-1.png"
        alt="Logo del Evento"
      />
      <div>
        <h5 class="evento__title-ml1">Comunidad Fest and Code</h5>
        <div class="center-btn">
          <button class="button button-primary">Más Información</button>
        </div>
      </div>
    </div>
    <div class="evento__body">
      <img
        class="evento__body__img"
        src="@/assets/images/Logo-comfeco-opción-1.png"
        alt="Logo del Evento"
      />
      <div>
        <h5 class="evento__title-ml1">Comunidad Fest and Code</h5>
        <div class="center-btn">
          <button class="button button-primary">Más Información</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PxEvent",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.evento {
  height: 100%;
  overflow-y: auto;
  .side__bar-style-title {
    margin: 0;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 0 3rem;
  }
  &-link {
    text-decoration: none;
    font-size: 16px;
    color: var(--color-white);
    display: inline-block;
    margin: 6px 0 0;
    transition: var(--transition);
    i {
      margin: 0 4px 0 0;
    }
    &:hover {
      color: var(--color-primary);
    }
  }
  &__body {
    max-width: 420px;
    margin: 0 auto 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border-bottom: 2px solid var(--color-primary);
    padding: 0 0 12px 0;
    &__img {
      width: 150px;
      margin: 0 10px 0 0;
    }
    > div {
      .evento__title-ml1 {
        margin: 10px 0;
        letter-spacing: 0.5px;
        color: var(--color-black);
      }
    }
    &__btn {
      padding: 1em;
      border-radius: 0.5em;
      font-weight: 700;
      background: hsl(0, 1, 65);
      color: #ffffff;
    }
    .center-btn {
      margin-top: 1rem;
      text-align: center;
    }
  }
}

@media screen and (min-width: 768px) {
  .evento {
    &__body {
      max-width: 768px;
    }
  }
}

@media screen and (min-width: 992px) {
  .evento {
    max-height: 550px;
  }
}
</style>
