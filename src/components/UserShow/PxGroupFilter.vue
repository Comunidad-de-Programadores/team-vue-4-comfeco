<template>
  <div class="groups__filters">
    <div class="filter">
      <form action="">
        <select id="js_filter" @change="filter($event)">
          <option value="0">Filtrar por</option>
          <option
            v-for="option in filterOptions"
            :key="option.id"
            :value="option.option.replace(' ', '').replace(' ', '')"
          >
            {{ option.option }}
          </option>
        </select>
      </form>
    </div>
    <div class="search">
      <form @submit.prevent="filtergroup">
        <div class="search-input">
          <input type="text" v-model="searchText" placeholder="Buscar grupo" list="teams"/>
          <datalist id="teams">
            <option
              v-for="option in searchOptions"
              :key="option.id"
              :value="option"
            />            
          </datalist>
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
  data() {
    return {
      filterOptions: [],
      searchText:'',
      searchOptions: [],
    };
  },
  methods: {
    filter(event) {
      const valueSelect = event.target.value;

      // Ocultar productos
      Array.from(document.querySelectorAll(".groups__card")).forEach((card) => {
        if (valueSelect === "0") {
          // Mostrar productos si el value es 0
          card.classList.remove("hide");
          card.classList.add("show");
        } else {
          card.classList.remove("show");
          card.classList.add("hide");
        }
      });

      if (valueSelect !== "0") {
        let resultFilter = Array.from(
          document.querySelectorAll(`.groups__card[data-ribbon=${valueSelect}]`)
        );
        resultFilter.forEach((card_resul) => {
          card_resul.classList.remove("hide");
          card_resul.classList.add("show");
        });
      }
      this.searchText = "";
    },
    filtergroup() {
      // Ocultar productos
      Array.from(document.querySelectorAll(".groups__card")).forEach((card) => {
        if (this.searchText === "") {
          // Mostrar productos si el value es 0
          card.classList.remove("hide");
          card.classList.add("show");
        } else {
          card.classList.remove("show");
          card.classList.add("hide");
        }
      });

      if (this.searchText !== "") {        
        let resultFilter = Array.from(
          document.querySelectorAll(`.groups__card[data-team='${this.searchText}']`)
        );
        resultFilter.forEach((card_resul) => {
          card_resul.classList.remove("hide");
          card_resul.classList.add("show");
        });
      }
    },    
  },
  async created() {
    const data = await fetch(
      "https://api-node-comfeco-cards.herokuapp.com/cards"
    );
    const information = await data.json();
    const cards = information.cards.cards;
    for (const [index, info] of cards.entries()) {
      const ribbon = info.ribbon;
      const firstLetter = ribbon.charAt(0).toUpperCase();
      const restText = ribbon.slice(1).toLowerCase();
      const allText = `${firstLetter}${restText}`;
      index += 1;
      let objOption = {
        id: index,
        option: allText,
      };
      this.filterOptions.push(objOption);
      this.searchOptions.push(info.titleTeam);
    }
  },
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
