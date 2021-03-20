<template>
  <div class="groups__my-group side__bar-style">
    <h3>
      Mi grupo
      <div
        class="button-dropdown"
        id="js_button-dropdown"
        @click="toggleSideBarTeam()"
      >
        <i class="fas fa-chevron-down" id="js_chevron-sidebar"></i>
      </div>
    </h3>
    <div class="groups__show-team" id="js_show-team">
      <div class="groups__my-group-info">
        <div class="groups__my-group-name">
          Crazy Tech
        </div>
        <div class="groups__my-group-icon">
          <img :src="imageLogoTeam" alt="Icon team" />
        </div>
      </div>
      <div class="groups__my-group-teams">
        <div class="groups__my-group-integrate">
          <div>
            <img :src="imageDefaultIntegrate" alt="Imagen de usuario" />
            <div>
              <p class="name"><b>Juan Secu</b></p>
              <p class="level">Novato</p>
            </div>
          </div>
          <div>
            <p class="type">Líder</p>
          </div>
        </div>
        <div class="groups__my-group-integrate">
          <div>
            <img :src="imageDefaultIntegrate" alt="Imagen de usuario" />
            <div>
              <p class="name"><b>Juan Secu</b></p>
              <p class="level">Novato</p>
            </div>
          </div>
          <div>
            <p class="type">Líder</p>
          </div>
        </div>
        <div class="groups__my-group-integrate">
          <div>
            <img :src="imageDefaultIntegrate" alt="Imagen de usuario" />
            <div>
              <p class="name"><b>Juan Secu</b></p>
              <p class="level">Novato</p>
            </div>
          </div>
          <div>
            <p class="type">Líder</p>
          </div>
        </div>
        <div class="groups__my-group-integrate">
          <div>
            <img :src="imageDefaultIntegrate" alt="Imagen de usuario" />
            <div>
              <p class="name"><b>Juan Secu</b></p>
              <p class="level">Novato</p>
            </div>
          </div>
          <div>
            <p class="type">Líder</p>
          </div>
        </div>
      </div>
      <div class="groups__my-group-actions">
        <button class="button button-secondary disabled">
          Abandonar
        </button>
        <button class="button button-primary">
          Ir al chat
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PxGroupSideBar",
  data() {
    return {
      imageLogoTeam: "./assets/images/jsLogo.png",
      imageDefaultIntegrate: "./assets/images/userDefaultImage.png",
    };
  },
  methods: {
    toggleSideBarTeam() {
      const $contenTeams = document.getElementById("js_show-team");
      const $iconChevron = document.getElementById("js_chevron-sidebar");
      $contenTeams.classList.toggle("active");
      $iconChevron.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/components/_group-sidebar.scss";
</style>
