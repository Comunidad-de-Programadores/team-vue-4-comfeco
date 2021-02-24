<template>
  <section class="carosuel-sponsor">
    <section class="carosuel-sponsor-head">
      <h2 class="carosuel-sponsor-title">Sponsors</h2>
      <button class="button button-primary">Apoyar iniciativa</button>
    </section>
    <carousel :settings="settings" :breakpoints="breakpoints">
      <slide v-for="sponsor in sponsors" :key="sponsor.key">
        <img :src="sponsor.url" :alt="sponsor.alt" />
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </section>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "PxCarouselSponsors",
  data() {
    return {
      sponsors: [
        {
          key: 1,
          url: "./assets/images/sponsors/CodeluTV.png",
          alt: "Codelu TV",
        },
        {
          key: 2,
          url: "./assets/images/sponsors/CodigoFacilito.png",
          alt: "Codigo Facilito",
        },
        {
          key: 3,
          url: "./assets/images/sponsors/Dominicode.jpg",
          alt: "Dominicode",
        },
        {
          key: 4,
          url: "./assets/images/sponsors/egghead.png",
          alt: "Egghead",
        },
        {
          key: 5,
          url: "./assets/images/sponsors/FernandoHerrera.jpg",
          alt: "Fernando Herrera",
        },
        {
          key: 6,
          url: "./assets/images/sponsors/huawei.jpg",
          alt: "Huawei",
        },
        {
          key: 7,
          url: "./assets/images/sponsors/JoseDimasLujan.jpg",
          alt: "Jose Dimas Lujan",
        },
        {
          key: 8,
          url: "./assets/images/sponsors/latamDev.jpg",
          alt: "Latam Dev",
        },
        {
          key: 9,
          url: "./assets/images/sponsors/LeonidasEsteban.jpg",
          alt: "Leonidas Esteban",
        },
        {
          key: 10,
          url: "./assets/images/sponsors/StacklyCode.png",
          alt: "StacklyCode",
        },
        {
          key: 11,
          url: "./assets/images/sponsors/Tekki.png",
          alt: "Codelu TV",
        },
      ],
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
        wrapAround: true,
        transition: 500,
      },
      breakpoints: {
        420: {
          itemsToShow: 1,
        },
        768: {
          itemsToShow: 2,
        },
        992: {
          itemsToShow: 3,
        },
        1200: {
          itemsToShow: 5,
        },
      },
    };
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>

<style scoped lang="scss">
.carosuel-sponsor {
  grid-area: sponsors;
  margin: 2rem 0;
  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 1rem 0;
    .button.button-primary {
      width: 200px;
    }
  }
  &-title {
    color: var(--color-black-2);
    font-size: 1.5rem;
  }
  .carousel {
    img {
      width: 100%;
      display: block;
    }
  }
}
@media screen and (min-width: 992px) {
  .carosuel-sponsor {
    margin: 2rem 1.5rem;
  }
}
</style>
