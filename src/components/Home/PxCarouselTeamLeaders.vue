<template>
  <section class="teamLeader__swipper">
    <PxDescription />
    <h2 class="teamLeader__swipper-title">Ellos ya creen en esta iniciativa</h2>
    <swiper
      :autoplay="{ delay: 2000 }"
      :pagination="{ clickable: true }"
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
      :space-between="20"
    >
      <swiper-slide
        class="teamLeader__swipper-slide"
        v-for="teamleader in teamLeaders"
        :key="teamleader.key"
      >
        <img
          class="teamLeader__swipper-image"
          :src="teamleader.imageLeader"
          :alt="teamleader.title"
        />
        <section class="teamLeader__swipper-information">
          <div
            class="teamLeader__swipper-information-image"
            :style="{
              backgroundImage: 'url(' + teamleader.imageFramework + ')',
            }"
          ></div>
          <span class="teamLeader__swipper-name">{{ teamleader.name }}</span>
        </section>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import PxDescription from "@/components/Home/PxDescription";

// import Swiper core and required modules
import SwiperCore, { Pagination, EffectFade, Autoplay, A11y } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// install Swiper modules
SwiperCore.use([Pagination, EffectFade, Autoplay, A11y]);

export default {
  name: "PxCarouselTeamLeaders",
  components: {
    Swiper,
    SwiperSlide,
    PxDescription,
  },
  data() {
    return {
      teamLeaders: [
        {
          key: 0,
          imageLeader:
            "./assets/images/teamLeaders/Vue/CristopherPaniagua.jpeg",
          name: "Cristopher Paniagua",
          imageFramework: "./assets/images/vuejslogo.jpg",
          title: "CristopherPaniagua",
        },
        {
          key: 2,
          imageLeader: "./assets/images/teamLeaders/Vue/IgnacioAnaya.jpeg",
          name: "Ignacio Anaya",
          imageFramework: "./assets/images/vuejslogo.jpg",
          title: "IgnacioAnaya",
        },
        {
          key: 3,
          imageLeader: "./assets/images/teamLeaders/Vue/ManuelOjeda.jpg",
          name: "Manuel Ojeda",
          imageFramework: "./assets/images/vuejslogo.jpg",
          title: "ManuelOjeda",
        },
        {
          key: 4,
          imageLeader: "./assets/images/teamLeaders/Vue/NoemiLeon.jpg",
          name: "Noemi Leon",
          imageFramework: "./assets/images/vuejslogo.jpg",
          title: "NoemiLeon",
        },
        {
          key: 5,
          imageLeader:
            "./assets/images/teamLeaders/React/AlejandroÑáñezOrtiz.jpg",
          name: "Alejandro Ñáñez Ortiz",
          imageFramework: "./assets/images/reactLogo.png",
          title: "AlejandroÑáñezOrtiz",
        },
        {
          key: 6,
          imageLeader: "./assets/images/teamLeaders/React/DiegoPlascencia.jpg",
          name: "Diego Plascencia",
          imageFramework: "./assets/images/reactLogo.png",
          title: "DiegoPlascencia",
        },
        {
          key: 7,
          imageLeader: "./assets/images/teamLeaders/React/LaraDiaz.jpg",
          name: "Lara Diaz",
          imageFramework: "./assets/images/reactLogo.png",
          title: "LaraDiaz",
        },
        {
          key: 8,
          imageLeader:
            "./assets/images/teamLeaders/React/LinaMaríaMontañoRamírez.jpg",
          name: "Lina Montaño",
          imageFramework: "./assets/images/reactLogo.png",
          title: "LinaMaríaMontañoRamírez",
        },
        {
          key: 9,
          imageLeader: "./assets/images/teamLeaders/React/VanessaMarely.jpg",
          name: "Vanessa Marely",
          imageFramework: "./assets/images/reactLogo.png",
          title: "VanessaMarely",
        },
        {
          key: 11,
          imageLeader: "./assets/images/teamLeaders/Svelte/MarcosRivas.jpg",
          name: "Marcos Rivas",
          imageFramework: "./assets/images/svelte.png",
          title: "MarcosRivas",
        },
        {
          key: 12,
          imageLeader: "./assets/images/teamLeaders/Svelte/OscarBarajas.jpg",
          name: "Oscar Barajas",
          imageFramework: "./assets/images/svelte.png",
          title: "OscarBarajas",
        },
        {
          key: 13,
          imageLeader: "./assets/images/teamLeaders/Svelte/SilvestreVivo.jpeg",
          name: "Silvestre Vivo",
          imageFramework: "./assets/images/svelte.png",
          title: "SilvestreVivo",
        },
        {
          key: 14,
          imageLeader: "./assets/images/teamLeaders/Svelte/SvelteMastery.jpg",
          name: "Svelte Mastery",
          imageFramework: "./assets/images/svelte.png",
          title: "SvelteMastery",
        },
        {
          key: 15,
          imageLeader:
            "./assets/images/teamLeaders/Angular/AnartzMugikaLedo.jpg",
          name: "Anartz Mugika Ledo",
          imageFramework: "./assets/images/angularLogo.jpeg",
          title: "AnartzMugikaLedo",
        },
        {
          key: 17,
          imageLeader: "./assets/images/teamLeaders/Angular/DiegoMontoya.jpg",
          name: "Diego Montoya",
          imageFramework: "./assets/images/angularLogo.jpeg",
          title: "DiegoMontoya",
        },
        {
          key: 18,
          imageLeader: "./assets/images/teamLeaders/Angular/MayraRodríguez.jpg",
          name: "Mayra Rodríguez",
          imageFramework: "./assets/images/angularLogo.jpeg",
          title: "MayraRodríguez",
        },
        {
          key: 19,
          imageLeader: "./assets/images/teamLeaders/Angular/NicolasMolina.jpg",
          name: "Nicolas Molina",
          imageFramework: "./assets/images/angularLogo.jpeg",
          title: "NicolasMolina",
        },
        {
          key: 16,
          imageLeader:
            "./assets/images/teamLeaders/Leaders2022/NicolasSchurmann.jpeg",
          name: "Nicolas Schurmann",
          imageFramework: "./assets/images/jsLogo.png",
          title: "NicolasSchurmann",
        },
        {
          key: 17,
          imageLeader:
            "./assets/images/teamLeaders/Leaders2022/SachaLifszyc.jpg",
          name: "Sacha Lifszyc",
          imageFramework: "./assets/images/jsLogo.png",
          title: "SachaLifszyc",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.teamLeader__swipper {
  grid-area: leaders;
  margin: 2rem 0 0 0;
  &-title {
    color: #000000;
    text-align: center;
  }
  &-image {
    display: block;
    width: 100%;
  }
  &-information {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-image: linear-gradient(
      to left bottom,
      #b43ed5,
      #b148db,
      #ad52e1,
      #aa5ae6,
      #a662eb
    );
    padding: 1.7rem 10px 1rem 10px;
    height: 60px;
  }
  &-information-image {
    position: absolute;
    top: -30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &-name {
    font-size: 18px;
    font-family: var(--fuente-bold);
    letter-spacing: 0.5px;
    color: #000;
    text-align: center;
  }
}

@media screen and (min-width: 992px) {
  .teamLeader__swipper {
    &-name {
      font-size: 20px;
    }
  }
}
</style>
