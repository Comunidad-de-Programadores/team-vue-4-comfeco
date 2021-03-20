<template>
  <div class="groups__grid">
    <PxLoader />
    <div
      class="groups__card"
      v-for="info in inforCard"
      :key="info.id"
      :data-ribbon="
        info.ribbon.charAt(0).toUpperCase() +
          info.ribbon
            .slice(1)
            .replace(' ', '')
            .replace(' ', '')
            .toLowerCase()
      "
      :data-team="info.titleTeam"
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
import PxLoader from "@/components/Modal/PxLoader";

export default {
  name: "PxGroupCards",
  data() {
    return {
      inforCard: [],
    };
  },
  computed: {},
  components: {
    PxLoader,
  },
  async created() {
    setTimeout(() => {
      document.getElementById("js_overlay-loader").classList.add("active");
      document.getElementById("js_loader").classList.add("active");
    }, 100);

    setTimeout(() => {
      document.getElementById("js_overlay-loader").classList.remove("active");
      document.getElementById("js_loader").classList.remove("active");
    }, 800);
    const data = await fetch(
      "https://api-node-comfeco-cards.herokuapp.com/cards"
    );
    const information = await data.json();
    const cards = information.cards.cards;
    setTimeout(() => {
      for (const info of cards) {
        this.inforCard.push(info);
      }
    }, 500);
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/sass/components/_group-cards.scss";
</style>
