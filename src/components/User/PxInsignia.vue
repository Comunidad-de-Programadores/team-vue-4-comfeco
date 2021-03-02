<template>
  <section class="insignias">
    Insignias
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
  </section>
</template>

<script>
export default {
  name: "PxInsignia",
  data(){
    return{
      insignias:[
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
  }
};
</script>

<style scoped lang="scss">
.insignias{
  background:#cfc4db;
  padding: 2% 6%;
  &__content{display: inline-block}
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
</style>
