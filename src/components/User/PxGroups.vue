<template>
  <section class="groups">
    <h2>Grupos</h2>
    <section class="groups__layout">
      <div class="groups__my-group side__bar-style">
        <h3>
          Mi grupo
          <div class="button-dropdown">
            <i class="fas fa-chevron-down"></i>
          </div>
        </h3>
        <div class="groups__my-group-info">
          <div class="groups__my-group-name">
            Crazy Tech
          </div>
          <div class="groups__my-group-icon">
            <img src="" alt="Icon team" />
          </div>
        </div>
        <div class="groups__my-group-teams">
          <div class="groups__my-group-integrate">
            <div>
              <img src="" alt="Imagen de usuario" />
              <p class="name"><b>Juan Secu</b></p>
              <p class="level">Novato</p>
            </div>
            <div>
              <p class="type">Líder</p>
            </div>
          </div>
          <div class="groups__my-group-integrate">
            <div>
              <img src="" alt="Imagen de usuario" />
              <p class="name"><b>Juan Secu</b></p>
              <p class="level">Novato</p>
            </div>
            <div>
              <p class="type">Líder</p>
            </div>
          </div>
          <div class="groups__my-group-integrate">
            <div>
              <img src="" alt="Imagen de usuario" />
              <p class="name"><b>Juan Secu</b></p>
              <p class="level">Novato</p>
            </div>
            <div>
              <p class="type">Líder</p>
            </div>
          </div>
          <div class="groups__my-group-integrate">
            <div>
              <img src="" alt="Imagen de usuario" />
              <p class="name"><b>Juan Secu</b></p>
              <p class="level">Novato</p>
            </div>
            <div>
              <p class="type">Líder</p>
            </div>
          </div>
        </div>
      </div>

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
          <img src="" alt="" />
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
    </section>
  </section>
</template>

<script>
export default {
  name: "PxGroups",
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
      padding: 1rem 0;
      .button-dropdown {
        cursor: pointer;
      }
    }
    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    &-integrate {
      display: flex;
    }
  }
}
</style>
