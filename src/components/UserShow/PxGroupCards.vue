<template>
  <div class="groups__grid">
    <div
      class="groups__card"
      v-for="info in inforCard"
      :key="info.id"
      :data-ribbon="
        info.ribbon.charAt(0).toUpperCase() + info.ribbon.slice(1).toLowerCase()
      "
    >
      <div class="image-zoom-in">
        <div
          class="groups__card-image"
          :style="{
            backgroundImage: 'url(' + info.image + ')',
          }"
        ></div>
      </div>
      <div class="groups__card-info">
        <div class="groups__card-ribbon">
          <span>
            {{ info.ribbon }}
          </span>
        </div>
        <h4 class="groups__card-title">
          {{ info.titleTeam }}
        </h4>
        <div class="groups__card-text">
          {{ info.body }}
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
  data() {
    return {
      inforCard: [],
    };
  },
  computed: {},
  async created() {
    const data = await fetch(
      "https://api-node-comfeco-cards.herokuapp.com/cards"
    );
    const information = await data.json();
    const cards = information.cards.cards;
    for (const info of cards) {
      this.inforCard.push(info);
    }
  },
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
    .image-zoom-in {
      overflow: hidden;
      background: var(--color-black);
    }
    &-image {
      width: 100%;
      height: 220px;
      background-position: left;
      background-repeat: no-repeat;
      background-size: cover;
      opacity: 0.5;
      transform: scale(1.3);
      transition: var(--transition);
      &:hover {
        background-position: center;
        transform: scale(1);
        opacity: 1;
      }
    }
    &-ribbon {
      padding: 6px 12px;
      height: 20px;
      border-radius: 12px;
      background: #edeef2;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: auto;
      span {
        font-size: 14px;
        font-family: var(--fuente-bold);
      }
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
      height: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
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
