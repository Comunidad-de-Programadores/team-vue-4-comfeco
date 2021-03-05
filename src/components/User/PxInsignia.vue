<template>
  <div>
    <section class="insignias">
      <div>
        <h6 class="insignias__title">Insignias</h6>
      </div>
      <div class="insignias__body">
        <section
          v-for="insignia in insignias"
          :key="insignia.id"
          class="insignias__content"
        >
          <div
            class="insignias__img"
            :style="{ backgroundImage: 'url(' + insignia.logo + ')' }"
          ></div>
        </section>
      </div>
    </section>
    <section class="actividades">
      <h6 class="actividades__title">Actividad reciente</h6>
      <div class="actividades__body">
        <div class="actividades__content">
          <span class="actividades__evento"
            >Te has unido al evento Comunity Fest and Code</span
          >
          <span class="actividades__icon"
            ><i class="far fa-calendar-check" style="font-size: 48px;"></i
          ></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PxInsignia",
  data() {
    return {
      insignias: [
        {
          id: 1,
          logo: "./assets/images/vuejslogo.jpg",
          titulo: "VueJS en Español",
        },
        {
          id: 2,
          logo: "./assets/images/reactLogo.png",
          titulo: "Angular español",
        },
        {
          id: 3,
          logo: "./assets/images/angularLogo.jpeg",
          titulo: "React Js Español Latino",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.insignias {
  background-image: linear-gradient(
    to left bottom,
    #b43ed5,
    #b148db,
    #ad52e1,
    #aa5ae6,
    #a662eb
  );
  padding: 2% 3%;
  &__title {
    display: flex;
    justify-content: flex-start;
  }
  &__body {
    text-align: center;
  }
  &__content {
    display: inline-block;
  }
  &__img {
    margin: 0 16px 0 0;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    width: 125px;
    height: 125px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.actividades {
  margin-top: 4rem;
  &__title {
    padding-left: 3%;
  }
  &__content {
    display: grid;
    grid-template-columns: 50% 48%;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    box-shadow: 0 7px 10px 0 #999;
    border: 1px solid #cccccc;
    margin-top: 1rem;
    padding: 1rem 3%;
  }
  &__evento {
    display: flex;
    justify-content: flex-start;
    padding-top: 1rem;
  }
  &__icon {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
