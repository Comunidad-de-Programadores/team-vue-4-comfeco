<template>
  <section class="my-account">    
    <div class="submenu">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="['submenu__btn tab-button', { active: currentTab === tab.tag }]"
        @click="currentTab = tab.tag"
        >
        <i :class="['fa', tab.icon]"></i> 
         {{ tab.title }}
      </button>      
    </div>
    <PxEditInfoUser />

    <div class="body">
      <PxInfoUser />
      <div class="mainbody">
        <component :is="currentTabComponent"></component>        
      </div>
      <PxEvent />
    </div>
  </section>
</template>

<script>
import Autenticacion from "@/firebase/auth/autentication.js";
import firebase from "firebase";
import PxInsignia from "@/components/User/PxInsignia";
import PxEvent from "@/components/User/PXEvent";
import PxInfoUser from "@/components/User/PxInfoUser";
import PxSubMenu from "@/components/User/PxSubMenu";

export default {
  name: "MyAccount",
  data() {
    return {
      currentTab: 'PxInsignia',
      tabs: [
        {
          tag: 'PxInfoUser',
          icon: 'fa-user',
          title:'Mi Perfil'
        },
        {
          tag: 'PxInsignia',
          icon: 'fa-star',
          title:'Insignias'
        },
        {
          tag: 'PxSubMenu',
          icon: 'fa-users',
          title:'Grupos'
        },
        {
          tag: 'PxEvent',
          icon: 'fa-calendar',
          title:'Eventos'
        }
      ]
    }
  },
  components: {
    PxInsignia,
    PxEvent,
    PxInfoUser,
    PxSubMenu,
  },
  methods: {
    async verifiedUser() {
      await this.authClass.authUser();
    },
  },
  computed: {
    authClass() {
      const auth = new Autenticacion();
      return auth;
    },
    currentTabComponent() {
      return this.currentTab
    }
  },
  mounted() {
    this.verifiedUser();
  },
};
</script>

<style scoped lang="scss">
.my-account {
  padding: 0 0px;
  width: 100%;
}
.body {
  display: grid;
  grid-template-columns: 22% 56% 22%;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
}

@media screen and (min-width: 992px) {
  .my-account {
    margin-top: 96px;
    padding: 0 6%;
  }
}
.submenu{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(hsl(285, 50, 70), hsl(285, 50, 80), hsl(285, 50, 85));
    width: 100%;
    height: 100px;
    margin: 0 0 50px 0;
    &__btn{
        height: 50px;
        width: 200px;
        border: 1px solid;
        border-radius: 3%;
        &.active{
          background: #390f64;
          color: #fff;
        }
    }
}
</style>
