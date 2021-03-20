<template>
  <div id="js_isignias_activity">
    <section class="insignias side__bar-style">
      <h3 class="side__bar-style-title">Insignias</h3>
      <div class="insignias__body">
        <section
          v-for="insignia in insignias"
          :key="insignia.id"
          class="insignias__content"
        >
          <div
            class="insignias__img"
            :style="{ backgroundImage: 'url(' + insignia.logo + ')' }"
          ></div>
          <h4>{{ insignia.titulo }}</h4>
        </section>
      </div>
    </section>
    <section class="actividades">
      <h6 class="actividades__title">Actividad reciente</h6>
      <div class="actividades__body">
        <div
          class="actividades__content"
          v-for="evento in eventos"
          :key="evento.idevent"
          v-show="evento.iduser == id_user"
        >
          <div class="actividades__evento">
            <ul>
              <li v-text="evento.name"></li>
            </ul>
          </div>
          <span class="actividades__icon"
            ><i class="far fa-calendar-check" style="font-size: 48px;"></i
          ></span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Autenticacion from "@/firebase/auth/autentication.js";
import firebase from "firebase";
// Inicializando firestore
const db = firebase.firestore();
export default {
  name: "PxShowInsignia",
  data() {
    return {
      insignias: [],
      eventos: [],
      id_user: String,
    };
  },
  methods: {
    async authUser() {
      const currentUser = await this.authClass.authUser();
      const userId = currentUser.uid;
      this.id_user = userId;
      const docRef = db.collection("userPersonalInformation").doc(userId);

      // Traer la informacion del usuario
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            const data = doc.data();
            let exclude_field = [
              "uid",
              "uNewPass",
              "uConfirmNewPass",
              "uPhoto",
            ];
            let count_field = exclude_field.length;
            for (const dato in data) {
              for (let i = 0; i < count_field; i++) {
                if (exclude_field[i] == dato) {
                  delete data[dato];
                }
              }
            }
            let noInsignia = true;
            for (const dato in data) {
              if (data[dato] == "") {
                noInsignia = false;
                continue;
              }
            }

            if (noInsignia) {
              let sociable = {
                id: 4,
                logo: "./assets/images/sociable.webp",
                titulo: "Sociable",
              };
              this.insignias.push(sociable);
            }
          }
        })
        .catch((error) => {
          console.error("Error al traer la informacion del documento:", error);
        });
    },
  },
  computed: {
    authClass() {
      const auth = new Autenticacion();
      return auth;
    },
  },
  mounted() {
    this.authUser();
    db.collection("userEvents")
      .get()
      .then((data) => {
        const eventos = [];
        data.forEach((evento) => {
          eventos.push({
            idevent: evento.data().event_id,
            name: evento.data().event_name,
            iduser: evento.data().user_uid,
          });
        });
        this.eventos = eventos;
      });
  },
};
</script>

<style scoped lang="scss">
.insignias {
  &__body {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
  &__content {
    display: inline-block;
    text-align: center;
  }
  &__img {
    margin: 0 auto 6px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
    width: 125px;
    height: 125px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.actividades {
  margin: 30px 0;
  &__body {
    max-height: 800px;
    overflow-y: auto;
  }
  &__title {
    font-size: 24px;
    margin: 0 0 10px 0;
    font-family: var(--fuente-bold);
    color: var(--color-black);
  }
  &__content {
    display: grid;
    grid-template-columns: 50% 48%;
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    box-shadow: 0 7px 10px 0 #999;
    border: 1px solid #222222;
    padding: 1rem;
    background: var(--color-secondary);
    margin: 0 0 16px;
  }
  &__evento {
    display: flex;
    justify-content: flex-start;
    padding-top: 1rem;
    font-size: 17px;
    font-family: var(--fuente-regular);
    color: var(--color-black);
  }
  &__icon {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
