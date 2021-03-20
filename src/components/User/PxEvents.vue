<template>
  <div class="main">
    <h2 class="events__title">Eventos Activos</h2>
    <div :class="mostrar == true ? 'body body--active' : 'body body--inactive'">
      <section>
        <div class="events">
          <div class="events__body">
            <div
              class="events__card"
              v-for="(evento, index) in itemEvents"
              :key="index"
              v-show="evento.publish"
            >
              <div class="events__cardHeader">
                <img :src="evento.img" alt="evento" class="events__img" />
              </div>
              <div class="events__information">
                <div class="events__cardBody">
                  <p class="events__description">{{ evento.description }}</p>
                </div>
                <div class="events__cardFooter">
                  <a href="#" class="link">Mas Información</a>
                  <button
                    class="button button-primary"
                    @click="
                      agregarEvento(
                        evento.name,
                        evento.description,
                        evento.id,
                        evento.name
                      )
                    "
                  >
                    Participar
                  </button>
                </div>
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
import Autenticacion from "@/firebase/auth/autentication.js";
import firebase from "firebase";

const db = firebase.firestore();
export default {
  name: "PxEvents",
  data() {
    return {
      itemEvents: [],
      nombre: String,
      descripcion: String,
      mostrar: false,
    };
  },
  mounted() {
    db.collection("eventos")
      .get()
      .then((data) => {
        const itemEvents = [];
        data.forEach((evento) => {
          itemEvents.push({
            id: evento.id,
            name: evento.data().name,
            description: evento.data().description,
            img: evento.data().img,
            publish: evento.data().publish,
          });
        });
        this.itemEvents = itemEvents;
      });
  },
  computed: {
    authClass() {
      const auth = new Autenticacion();
      return auth;
    },
  },
  methods: {
    async agregarEvento(nombre, description, event_id, event_name) {
      this.nombre = nombre;
      this.descripcion = description;
      this.mostrar = true;
      setTimeout(() => {
        this.mostrar = false;
      }, 5000);

      const currentUser = await this.authClass.authUser();
      const userId = currentUser.uid;

      db.collection("userEvents")
        .add({ event_id: event_id, user_uid: userId, event_name: event_name })
        .then(() => {
          console.log(userId);
          console.log("Registro de manera correcta");
        })
        .catch((error) => {
          console.log("Error al momento de registrar: " + error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.body {
  width: 100%;
  display: grid;
  &--active {
    grid-template-columns: 85% 15%;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
  }
  &--inactive {
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
    color: var(--color-black);
    margin: 2rem auto;
    text-align: center;
  }
  &__body {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 16px;
    grid-gap: 16px;
    align-items: center;
    justify-content: center;
  }
  &__card {
    height: auto;
    background: #cca6f2;
  }
  &__information {
    padding: 16px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__cardBody {
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 80px;
  }
  &__cardFooter {
    .link {
      margin: 0 0 10px 0;
      display: inline-block;
    }
  }
  &__description {
    text-align: left;
    letter-spacing: 0.5px;
    line-height: 18px;
    color: var(--color-black);
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
    height: 165px;
    object-fit: cover;
  }
  &__agregado {
    width: 17vw;
    height: 40vh;
    padding: 1rem 0.5rem;
    border: 1px solid lightgray;
  }
  &__titleAdd {
    margin: 0.5rem 0;
    color: gray;
    font-weight: 800;
  }
  &__descriptionAdd {
    text-align: justify;
  }
  &__titleheader {
    text-align: center;
  }
}
@media screen and (min-width: 992px) {
  .main {
    margin: 200px auto 1rem;
  }
  .events {
    &__body {
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 40px;
    }
  }
}
</style>
