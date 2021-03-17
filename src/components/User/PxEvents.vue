<template>
  <div class="main">
    <h2 class="events__title">Eventos Activos</h2>
    <div :class="mostrar==true?'body body--active':'body body--inactive'">
      <section>
        <div class="events">
          <div class="events__body">
            <div
              class="events__card"
              v-for="evento in itemEvents"
              :key="evento.key"
              v-show="evento.publish"
            >
              <div class="events__cardHeader">
                <img :src="evento.img" alt="evento" class="events__img" />
              </div>
              <div class="events__cardBody">
                <p class="events__description">{{evento.description}}</p>
              </div>
              <div class="events__cardFooter">
                <a href="#" class="events__btn events__btn--secondary"
                  >Mas Información</a
                >
                <button
                  class="events__btn events__btn--primary"
                  @click="agregarEvento(evento.name, evento.description)"
                >
                  Participar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <aside v-show="mostrar" class="events__agregado">
        <h4 class="events__titleheader">Evento a Participar</h4>
        <h5 v-text="nombre" class="events__titleAdd"></h5>
        <p v-text="descripcion" class="events_descrptionAdd"></p>
      </aside>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

export default {
  name: "PxEvents",
  data() {
    return {
      eventos: [
        {
          id: 1,
          name: "Aprendiendo Vue de 0 a experto",
          img: "assets/images/vuejslogo.jpg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente blanditiis repellat at laboriosam ipsa corrupti!",
          participar: false,
        },
        {
          id: 2,
          name: "Metodologia de Colaboración",
          img: "assets/images/colaborador.webp",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente blanditiis repellat at laboriosam ipsa corrupti!",
          participar: false,
        },
        {
          id: 3,
          name: "Aprendiendo Angular avanzado",
          img: "assets/images/angularLogo.jpeg",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente blanditiis repellat at laboriosam ipsa corrupti!",
          participar: false,
        },
        {
          id: 4,
          name: "Introducción a Svelte",
          img: "assets/images/svelte.png",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente blanditiis repellat at laboriosam ipsa corrupti!",
          participar: false,
        },
      ],
      itemEvents: [],
      nombre: String,
      descripcion: String,
      mostrar: false,
    };
  },
  mounted() {
    const db = firebase.firestore();
    db.collection('eventos').get().then(data => {
      const itemEvents=[];
      data.forEach(evento => {
        console.log(evento);
        itemEvents.push(evento.data());
      });
      this.itemEvents = itemEvents;
    });
  },
  methods: {
    agregarEvento(nombre, description) {
      this.nombre = nombre;
      this.descripcion = description;
      this.mostrar = true;
      setTimeout(() => {
        this.mostrar = false;
      }, 5000);
    },
  },
};
</script>
<style lang="scss" scoped>
.body{
  width: 100%;
  display: grid;
  &--active{
    grid-template-columns: 85% 15%;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
  }
  &--inactive{
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
  }
}
.main {
  margin: 12rem auto 1rem;
}
.events {
  &__title {
    color: black;
    margin: 2rem auto;
    text-align: center;
  }
  &__body {
    width: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
  }
  &__card {
    height: 45vh;
    margin: 0.5rem 1rem 0.5rem 0rem;
    background: lightgray;
  }
  &__cardBody {
    margin: 1rem;
  }
  &__cardFooter {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem;
  }
  &__description {
    text-align: justify;
  }
  &__btn {
    padding: 0.5rem 1.5rem;
    &--primary {
      border: 1px solid;
      background: lightgray;
      border-radius: 1rem;
    }
    &--secondary {
      text-decoration: none;
    }
  }
  &__img {
    width: 100%;
    height: 25vh;
  }
  &__agregado{
    width: 17vw;
    height: 40vh;
    padding: 1rem 0.5rem;
    border: 1px solid lightgray;
  }
  &__titleAdd{
    margin: 0.5rem 0;
    color: gray;
    font-weight: 800;
  }
  &__descriptionAdd{
    text-align: justify;
  }
  &__titleheader{
    text-align: center;
  }
}
</style>
