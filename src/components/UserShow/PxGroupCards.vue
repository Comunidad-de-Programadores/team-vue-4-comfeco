<template>
  <div class="groups__grid">
    <div class="groups__card">
      <img src="@/assets/images/jsts.png" alt="" />
      <div class="groups__card-info">
        <div class="groups__card-label">
          TypeScript
        </div>
        <h4 class="groups__card-title">
          Los Crypto
        </h4>
        <div class="groups__card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          reprehenderit ad commodi labore dignissimos corporis sed repudiandae
          facilis
        </div>
        <div class="groups__card-action">
          <button class="button button-primary">Unirme</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PxGroupCards",
};
</script>

<style scoped lang="scss">
.groups {
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
  }
  &__card {
    border: 2px solid var(--color-primary);
    background: var(--color-secondary);
    img {
      width: 100%;
    }
    &-info {
      padding: 8px;
      line-height: 20px;
    }
    &-title {
      margin: 1.2rem 0 10px;
      font-size: 22px;
      font-family: var(--fuente-bold);
    }
    &-text {
      font-size: 17px;
      color: var(--color-black);
      margin: 0 0 12px 0;
    }
    &-action {
      text-align: center;
      .button {
        width: 60%;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .groups {
    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media screen and (min-width: 992px) {
  .groups {
    &__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}

@media screen and (min-width: 1200px) {
  .groups {
    &__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media screen and (min-width: 1400px) {
  .groups {
    &__grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}
</style>
