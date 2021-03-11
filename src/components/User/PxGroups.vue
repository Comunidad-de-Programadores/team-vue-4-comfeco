<template>
  <section class="groups">
    <h2>Grupos</h2>
    <section class="groups__layout">
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

      <div class="content__filter-grid">
        <div class="groups__filters">
          <div>
            <form action="">
              <select name="" id="js_filter">
                <option value="0">Filtrar por</option>
                <option value="0">Filtrar por lenguaje</option>
              </select>
            </form>
          </div>
          <div>
            <form action="">
              <input type="text" placeholder="Buscar grupo" />
            </form>
          </div>
        </div>

        <div class="groups__grid">
          <div class="groups__card">
            <img src="@/assets/images/jsts.png" alt="" />
            <div class="groups__card-info">
              <div class="groups__card-label">
                TypeScript
              </div>
              <h4 class="groups__card-title">
                Los Crypto
              </h4>
              <div class="groups__card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reprehenderit ad commodi labore dignissimos corporis sed
                repudiandae facilis
              </div>
              <div class="groups__card-action">
                <button class="button button-primary">Unirme</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "PxGroups",
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
  margin: 180px 0 30px;
  h2 {
    color: var(--color-black);
    text-align: center;
  }
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
  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 10px;
  }
  &__card {
    border: 2px solid var(--color-primary);
    background: var(--color-secondary);
    img {
      width: 100%;
    }
    &-info {
      padding: 8px;
      line-height: 20px;
    }
    &-title {
      margin: 1.2rem 0 10px;
      font-size: 22px;
      font-family: var(--fuente-bold);
    }
    &-text {
      font-size: 17px;
      color: var(--color-black);
      margin: 0 0 12px 0;
    }
    &-action {
      text-align: center;
      .button {
        width: 60%;
      }
    }
  }
}
@media screen and (min-width: 768px) {
  .groups {
    &__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media screen and (min-width: 992px) {
  .groups {
    &__layout {
      display: flex;
      align-items: flex-start;
    }
    &__my-group {
      margin: 0 30px 0 0;
    }
    &__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
@media screen and (min-width: 1400px) {
  .groups {
    &__grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }
}
</style>
