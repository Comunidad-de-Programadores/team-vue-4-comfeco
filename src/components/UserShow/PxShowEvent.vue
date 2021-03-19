<template>
  <div class="evento side__bar-style">
    <div class="evento__header">
      <p class="side__bar-style-title">Eventos de tu interés</p>
    </div>
    <div class="evento__body" v-for="item in itemEvents" :key="item.id" v-show="item.publish">
      <img
        :src="item.img"
        alt="logo"
        class="evento__body__img"
      />
      <div>
        <h5 class="evento__title-ml1" v-text="item.name"></h5>
        <div class="center-btn">
          <button class="button button-primary">Más Información</button>
        </div>
      </div>
    </div> 
  </div>
</template>
<script>
import firebase from "firebase";
const db = firebase.firestore();

export default {
  name: "PxShowEvent",
  data() {
    return {
      itemEvents: [],
    };
  },
  mounted() {
    db.collection('eventos').get().then(data => {
      const itemEvents=[];
      data.forEach(evento => {
        itemEvents.push({
          id: evento.id,
          item: evento.data().item,
          name: evento.data().name,
          img: evento.data().img,
          publish: evento.data().publish,
        });
      });
      this.itemEvents = itemEvents;
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.evento {
  height: 100%;
  overflow-y: auto;
  .side__bar-style-title {
    margin: 0;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 0 3rem;
  }
  &-link {
    text-decoration: none;
    font-size: 16px;
    color: var(--color-white);
    display: inline-block;
    margin: 6px 0 0;
    transition: var(--transition);
    i {
      margin: 0 4px 0 0;
    }
    &:hover {
      color: var(--color-primary);
    }
  }
  &__body {
    max-width: 420px;
    margin: 0 auto 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    border-bottom: 2px solid var(--color-primary);
    padding: 0 0 12px 0;
    &__img {
      width: 100%;
      height: 7rem;
      margin: 0 10px 0 0;
    }
    > div {
      .evento__title-ml1 {
        margin: 10px 0;
        letter-spacing: 0.5px;
        color: var(--color-black);
      }
    }
    &__btn {
      padding: 1em;
      border-radius: 0.5em;
      font-weight: 700;
      background: hsl(0, 1, 65);
      color: #ffffff;
    }
    .center-btn {
      margin-top: 1rem;
      text-align: center;
    }
  }
}

@media screen and (min-width: 768px) {
  .evento {
    &__body {
      max-width: 768px;
    }
  }
}

@media screen and (min-width: 992px) {
  .evento {
    max-height: 550px;
  }
}
</style>
