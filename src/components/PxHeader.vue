<template>
  <header class="header">
    <section class="header__logo">
      <router-link to="/">
        <img
          src="@/assets/images/Logo-comfeco-opción-1.png"
          alt="Logo comfeco opcion 1"
        />
      </router-link>
    </section>
    <section id="js_isLogedOptions">
      <div class="burgerButton" id="js_burgerButton" @click="toggleMenu()">
        <i class="fas fa-bars"></i>
      </div>
      <nav class="menu" id="js_menu">
        <section class="user">
          <section class="user__information">
            <div class="user__avatar">
              <img
                src="@/assets/images/userDefaultImage.png"
                id="js_avatar-user"
                alt="Avatar image"
              />
            </div>
            <div class="user__aditional--info">
              <div class="user__name">
                <span id="js_user-name"></span>
              </div>
              <div class="user__email">
                <span id="js_user-email"></span>
              </div>
            </div>
            <div
              class="user__open--logOut"
              id="js_open-logOut"
              @click="openOptionUser()"
            >
              <i class="fas fa-chevron-down"></i>
            </div>
          </section>
          <section class="user__notification">
            <div class="user__notification--icon">
              <i class="fas fa-bell"></i>
              <span class="user__notification--text-mobile">
                Notificaciones
              </span>
              <span class="user__notification--count">0</span>
            </div>
          </section>
        </section>
        <ul class="menu-list">
          <li class="menu-item">
            <a href="#" class="menu-link">
              <i class="fas fa-home"></i>
              Inicio
            </a>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link">
              <i class="fas fa-users"></i>
              Comunidades
            </a>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link">
              <i class="fas fa-pencil-ruler"></i>
              Talleres
            </a>
          </li>
          <li class="menu-item">
            <a href="#" class="menu-link">
              <i class="fas fa-bullhorn"></i>
              Creadores de contenido
            </a>
          </li>
        </ul>
        <section class="user__options" id="js_user-options">
          <button @click="logOut()">
            <i class="fas fa-sign-out-alt"></i>
            Cerrar sesion
          </button>
        </section>
      </nav>
    </section>
  </header>
</template>

<script>
// Import class of auth
import Autenticacion from "@/firebase/auth/autentication.js";
import firebase from "firebase";
export default {
  name: "PxHeader",
  data() {
    return {};
  },
  methods: {
    async logOut() {
      this.authClass.singOutOfAccount().then(() => {
        const $menu = document.getElementById("js_menu");
        const $optionUser = document.getElementById("js_user-options");
        // Reset class active for this components
        $menu.classList.remove("active");
        $optionUser.classList.toggle("active");

        this.$router.push("/");
      });
    },
    toggleMenu() {
      const $menu = document.getElementById("js_menu");
      $menu.classList.toggle("active");
    },
    openOptionUser() {
      const $optionUser = document.getElementById("js_user-options");
      $optionUser.classList.toggle("active");
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

<style scoped lang="scss">
@import "../assets/sass/components/_header.scss";
</style>
