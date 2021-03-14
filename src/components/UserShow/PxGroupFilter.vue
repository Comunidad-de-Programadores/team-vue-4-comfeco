<template>
  <div class="groups__filters">
    <div class="filter">
      <form action="">
        <select name="" id="js_filter">
          <option value="0">Filtrar por</option>
          <option value="1">Filtrar por lenguaje</option>
        </select>
      </form>
    </div>
    <div class="search">
      <form action="">
        <div class="search-input">
          <input type="text" placeholder="Buscar grupo" />
        </div>
        <div class="search-button">
          <button>
            <i class="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "PxGroupFilter",
};
</script>

<style lang="scss" scoped>
.groups {
  &__filters {
    height: auto;
    margin: 1rem 0;
    background: var(--color-gradient);
    border-radius: 20px;
    padding: 16px;
    .filter {
      margin: 0 0 1rem 0;
    }
    .filter,
    .search {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      form {
        width: 100%;
        height: 100%;
        display: inherit;
        align-items: inherit;
        justify-content: inherit;
        select,
        input {
          width: 100%;
          height: 80%;
          display: inherit;
          align-items: inherit;
          justify-content: inherit;
          padding: 8px;
          border: 1px solid var(--color-primary);
          font-size: 15px;
          &::placeholder {
            color: var(--color-white);
            font-size: 14px;
            font-family: var(--fuente-light);
          }
          option {
            font-size: 14px;
            font-family: var(--fuente-light);
          }
        }
        input {
          border-right: 0;
        }
        button {
          padding: 0;
        }
        .search-input {
          width: calc(100% - 40px);
        }
        .search-button {
          width: 40px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-primary);
          background: var(--color-primary);
          color: var(--color-white);
          button {
            width: 100%;
            height: 100%;
            color: var(--color-white);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: var(--transition);
            i {
              font-size: 15px;
            }
            &:hover {
              background: var(--color-white);
              i {
                color: var(--color-primary);
              }
            }
          }
        }
      }
    }
  }
}
@media screen and (min-width: 992px) {
  .groups {
    &__filters {
      margin: 0 0 1rem 0;
      padding: 0 16px;
      height: 48px;
      display: flex;
      .filter,
      .search {
        margin: 0;
        form {
          .search-input {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          }
          .search-button {
            height: 80%;
          }
        }
      }
      .filter {
        margin: 0 16px 0 0;
      }
    }
  }
}
</style>
