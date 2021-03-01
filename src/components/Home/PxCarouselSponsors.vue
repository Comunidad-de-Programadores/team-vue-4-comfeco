<template>
  <section class="carosuel-sponsor" id="js_carosuel-sponsor">
    <section class="carosuel-sponsor-head">
      <h2 class="carosuel-sponsor-title">Sponsors</h2>
      <button class="button button-primary">Apoyar iniciativa</button>
    </section>
    <swiper
      :pagination="{ clickable: true }"
      navigation
      :breakpoints="{
        1200: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        420: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      }"
    >
      <swiper-slide
        class="teamLeader__swipper-slide"
        v-for="sponsor in sponsors"
        :key="sponsor.key"
      >
        <img
          class="teamLeader__swipper-image"
          :src="sponsor.url"
          :alt="sponsor.alt"
        />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  EffectFade,
  Navigation,
  Autoplay,
  A11y,
} from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// install Swiper modules
SwiperCore.use([Pagination, EffectFade, Autoplay, A11y, Navigation]);

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
        /*{
          key: 8,
          url: "./assets/images/sponsors/latamDev.jpg",
          alt: "Latam Dev",
        },*/
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
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped lang="scss">
.carosuel-sponsor {
  margin: 2rem 0;
  grid-area: sponsors;
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
    padding: 0 8px 0 0;
  }
  .teamLeader__swipper-slide {
    img {
      object-fit: cover;
      width: 180px;
      height: 180px;
      margin: auto;
      display: block;
      border-radius: 50%;
      box-shadow: 0 0 8px 3px rgba(0, 0, 0, 0.5);
    }
    &__slide {
      padding: 10px 1rem;
    }
  }
}
@media screen and (min-width: 992px) {
  .carosuel-sponsor {
    margin: 2rem 0;
  }
}
</style>
