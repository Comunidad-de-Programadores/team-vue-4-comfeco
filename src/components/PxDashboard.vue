<template>
  <div class="private">
    <h1>This is a private page</h1>
    <button @click="logOut">LogOut</button>
  </div>
  <div class="aside">
    <div class="aside__header">
        <h5>Comunidades</h5>
        <a href="#">Ver más</a>
    </div>
    <VComunidad :imagen="logo" :titulo="titulo" :url="url"></VComunidad>
  </div>
</template>

<script>
import Autenticacion from "@/firebase/auth/autentication.js";
import VComunidad from "@/components/PxComunidades";
export default {
  name: "private",
  data(){
    return{
      logo:'https://picsum.photos/50/50',
      titulo: 'Comunidad 1',
      url: 'https:www.google.com'
    }
  },
  components:{
    VComunidad
  },
  methods: {
    logOut() {
      this.authClass.singOutOfAccount().then(() => {
        this.$router.push("/");
      });
    },
  },
  computed: {
    authClass() {
      const auth = new Autenticacion();
      return auth;
    },
  },
};
</script>
<style lang="scss">
  .aside{
    width: 20%;
    height: 40vh;
    margin: 1%;
    padding: 1%;
    background-color: hsl(0, 1, 70);
    color: white;
    overflow: auto;
    &__header{
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>
