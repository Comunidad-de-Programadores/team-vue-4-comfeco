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
          <input
            type="text"
            v-model="searchText"
            placeholder="Buscar grupo"
            list="teams"
          />
          <datalist id="teams">
            <option
              v-for="option in searchFilter"
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
      searchText: "",
      searchOptions: [],
      searchFilter: [],
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
          document.querySelectorAll(
            `.groups__card[data-team='${this.searchText}']`
          )
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
    this.searchFilter = this.searchOptions.filter((valor, indice) => {
      return this.searchOptions.indexOf(valor) === indice;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/sass/components/_group-filter.scss";
</style>
