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

    <div class="my-account__user">
      <PxInfoUser />
      <div class="my-account__user-main">
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

export default {
  name: "MyAccount",
  data() {
    return {
      currentTab: "PxInsignia",
      tabs: [
        {
          tag: "PxInfoUser",
          icon: "fa-user",
          title: "Mi Perfil",
        },
        {
          tag: "PxInsignia",
          icon: "fa-star",
          title: "Insignias",
        },
        {
          tag: "PxSubMenu",
          icon: "fa-users",
          title: "Grupos",
        },
        {
          tag: "PxEvent",
          icon: "fa-calendar",
          title: "Eventos",
        },
      ],
    };
  },
  components: {
    PxInsignia,
    PxEvent,
    PxInfoUser,
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
  &__user {
    margin: 170px 0 40px 0;
    * {
      margin: 0 0 20px 0;
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
  .my-account__user {
    display: grid;
    grid-template-columns: calc(25% - 16px) 50% calc(25% - 16px);
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    align-items: flex-start;
  }
}
</style>
