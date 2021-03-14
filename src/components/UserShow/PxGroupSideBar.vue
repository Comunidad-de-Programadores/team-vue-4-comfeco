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
.groups {
  &__my-group {
    margin: 1rem 0 0;
    padding: 1rem;
    h3 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .button-dropdown {
        cursor: pointer;
        width: 30px;
        text-align: center;
        i {
          transition: var(--transition);
          &.active {
            transform: rotate(180deg);
          }
        }
      }
    }
    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 16px 0;
      padding: 4px 8px;
      background: #3a104a;
      color: var(--color-white);
    }
    &-integrate {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0 1rem 0;
      padding: 6px 8px;
      border-bottom: 1px solid var(--color-white);
      img {
        width: 30px;
        height: 30px;
        margin: 0 6px 0 0;
        display: inline-block;
      }
      > div:first-child {
        display: inline-flex;
        align-items: center;
      }
      .name {
        font-size: 16px;
        color: var(--color-black);
        margin: 0 0 6px 0;
      }
      .level {
        font-size: 13px;
        color: var(--color-white);
        font-family: var(--fuente-medium);
        letter-spacing: 0.5px;
      }
      .type {
        font-size: 18px;
        color: var(--color-white);
        letter-spacing: 0.5px;
        font-family: var(--fuente-bold);
      }
    }
    &-name {
      font-size: 17px;
      font-family: var(--fuente-bold);
    }
    &-icon {
      img {
        display: block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-position: center;
        object-fit: cover;
      }
    }
    &-actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .button {
        width: 45%;
        &.disabled {
          cursor: not-allowed;
          background: #cccccc;
        }
      }
    }
  }
  &__show-team {
    max-height: 0;
    overflow: hidden;
    transition: var(--transition);
    opacity: 0;
    pointer-events: none;
    &.active {
      max-height: 400px;
      opacity: 1;
      pointer-events: initial;
    }
  }
}
@media screen and (min-width: 992px) {
  .groups {
    &__my-group {
      margin: 0 30px 0 0;
      width: 270px;
    }
  }
}
</style>
