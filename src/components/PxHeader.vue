<template>
  <header class="header" id="js_header">
    <section class="header__logo">
      <router-link to="/">
        <img
          src="@/assets/images/Logo-comfeco-opción-1.png"
          alt="Logo comfeco opcion 1"
        />
      </router-link>
    </section>
    <section id="js_isLogedOptions">
      <div class="overlay" id="js_overlay"></div>
      <div
        class="burgerButton"
        id="js_burgerButton"
        @click="toggleMenu($event)"
      >
        <span class="barras-menu" id="js_barras-menu">
          <span></span>
        </span>
      </div>
      <nav class="menu" id="js_menu">
        <section class="user">
          <section
            class="user__information"
            id="js_open-logOut"
            @click="openOptionUser()"
          >
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
            <div class="user__open--logOut">
              <i class="fas fa-chevron-down"></i>
            </div>
          </section>
          <section class="user__notification">
            <div class="user__notification--icon">
              <i class="fas fa-bell animation-bell"></i>
              <span class="user__notification--text-mobile">
                Notificaciones
              </span>
              <span class="user__notification--count">0</span>
            </div>
          </section>
        </section>
        <ul class="menu-list">
          <li class="menu-item">
            <router-link to="/home" class="menu-link">
              <i class="fas fa-home"></i>
              Inicio
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/*" class="menu-link">
              <i class="fas fa-users"></i>
              Comunidades
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/*" class="menu-link">
              <i class="fas fa-pencil-ruler"></i>
              Talleres
            </router-link>
          </li>
          <li class="menu-item">
            <router-link to="/*" class="menu-link">
              <i class="fas fa-bullhorn"></i>
              Creadores de contenido
            </router-link>
          </li>
        </ul>
        <section class="user__options" id="js_user-options">
          <button class="user__account" @click="openOptionUser()">
            <router-link to="/my-account">
              <i class="fas fa-user-circle"></i>
              Mi perfil
            </router-link>
          </button>
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
        const $overlay = document.getElementById("js_overlay");
        // Reset class active for this components
        $menu.classList.remove("active");
        $optionUser.classList.remove("active");
        $overlay.classList.remove("active");
        this.$router.push("/");
      });
    },
    toggleMenu(event) {
      const $menu = document.getElementById("js_menu");
      const $burguerButton = document.getElementById("js_barras-menu");
      const $overlay = document.getElementById("js_overlay");
      $overlay.classList.toggle("active");
      $menu.classList.toggle("active");
      $burguerButton.classList.toggle("active");
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
