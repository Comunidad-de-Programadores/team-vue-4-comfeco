<template>
  <section class="my-account">
    <div class="submenu">
      <div class="submenu__wrapper">
        <button
          v-for="tab in tabs"
          :key="tab"
          :class="[
            'submenu__btn tab-button',
            { active: currentTab === tab.tag },
          ]"
          @click="currentTab = tab.tag"
        >
          <i :class="['fa', tab.icon]"></i>
          {{ tab.title }}
        </button>
      </div>
    </div>
    <component :is="currentTabComponent"></component>
  </section>
</template>

<script>
import Autenticacion from "@/firebase/auth/autentication.js";
import firebase from "firebase";

import PxMyProfile from "@/components/User/PxMyProfile";
import PxGroups from "@/components/User/PxGroups";
import PxIsignias from "@/components/User/PxIsignias";
import PxEvents from "@/components/User/PxEvents";

export default {
  name: "MyAccount",
  data() {
    return {
      currentTab: "PxMyProfile",
      tabs: [
        {
          tag: "PxMyProfile",
          icon: "fa-user",
          title: "Mi Perfil",
        },
        {
          tag: "PxIsignias",
          icon: "fa-star",
          title: "Insignias",
        },
        {
          tag: "PxGroups",
          icon: "fa-users",
          title: "Grupos",
        },
        {
          tag: "PxEvents",
          icon: "fa-calendar",
          title: "Eventos",
        },
      ],
    };
  },
  components: {
    PxGroups,
    PxMyProfile,
    PxIsignias,
    PxEvents,
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
      return this.currentTab;
    },
  },
  mounted() {
    this.verifiedUser();
  },
};
</script>

<style scoped lang="scss">
.my-account {
  padding: 0 16px;
  width: 100%;
  // Estilos para el sub menu cambiante
  .submenu {
    position: absolute;
    top: 75px;
    left: 0;
    padding: 16px;
    background: linear-gradient(
      hsl(285, 50, 70),
      hsl(285, 50, 80),
      hsl(285, 50, 85)
    );
    width: 100%;
    height: auto;
    &__wrapper {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
    }
    &__btn {
      min-width: 100px;
      height: 50px;
      width: calc(50% - 20px);
      border: 1px solid;
      border-radius: 4px;
      padding: 6px;
      margin: 5px;
      transition: var(--transition);
      &:hover {
        background: #390f64;
        color: #fff;
      }
      &.active {
        background: #390f64;
        color: #fff;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .my-account {
    &__user {
      margin: 110px 0 40px 0;
    }
    .submenu {
      &__btn {
        width: calc(25% - 20px);
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .my-account {
    margin-top: 96px;
    padding: 0 6%;
    .submenu {
      top: 96px;
      padding: 16px 6%;
      &__btn {
        width: 200px;
      }
    }
    &__user {
      margin: 200px 0 60px 0;
      * {
        margin: 0;
      }
    }
  }
}
</style>
