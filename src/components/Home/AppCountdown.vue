<template>
  <section class="countDown">
    <h4 class="countDown__title">{{ title }}</h4>
    <div class="countDown__container">
      <div class="countDown__dias">
        <div class="countDown__dias-dia">{{ dias }}</div>
        <div class="countDown__dias-texto">{{ text_dia }}</div>
      </div>
      <div class="countDown__horas">
        <div class="countDown__horas-hora">{{ horas }}</div>
        <div class="countDown__horas-texto">{{ text_horas }}</div>
      </div>
      <div class="countDown__minutos">
        <div class="countDown__minutos-minuto">{{ minutos }}</div>
        <div class="countDown__minutos-texto">{{ text_minutos }}</div>
      </div>
      <div class="countDown__segundos">
        <div class="countDown__segundos-segundo">{{ segundos }}</div>
        <div class="countDown__segundos-texto">{{ text_segundos }}</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppCountdown",
  props: ["diaevento", "title"],
  data() {
    return {
      dias: "",
      horas: "",
      minutos: "",
      segundos: "",
      text_dia: "",
      text_horas: "",
      text_minutos: "",
      text_segundos: "",
    };
  },
  methods: {
    getTime() {
      var now = new Date();
      var y2k = new Date(this.diaevento);
      var days = (y2k - now) / 1000 / 60 / 60 / 24;
      var daysRound = Math.floor(days);
      var hours = (y2k - now) / 1000 / 60 / 60 - 24 * daysRound;
      var hoursRound = Math.floor(hours);
      var minutes =
        (y2k - now) / 1000 / 60 - 24 * 60 * daysRound - 60 * hoursRound;
      var minutesRound = Math.floor(minutes);
      var seconds =
        (y2k - now) / 1000 -
        24 * 60 * 60 * daysRound -
        60 * 60 * hoursRound -
        60 * minutesRound;
      var secondsRound = Math.round(seconds);
      this.text_segundos = secondsRound == 1 ? " Segundo" : " Segundos";
      this.text_minutos = minutesRound == 1 ? " Minuto" : " Minutos ";
      this.text_horas = hoursRound == 1 ? " Hora" : " Horas ";
      this.text_dia = daysRound == 1 ? " Día" : " Días ";
      this.dias = daysRound;
      this.horas = hoursRound;
      this.minutos = minutesRound;
      this.segundos = secondsRound;
      setTimeout(() => {
        this.getTime();
      }, 1000);
    },
  },
  mounted() {
    if (this.diaevento == "") {
      this.title = "Debe agregar una fecha para el evento.";
    } else {
      this.getTime();
    }
  },
};
</script>

<style scoped lang="scss">
.countDown {
  margin: 2rem 0;
  grid-area: countDown;
  &__title {
    text-align: center;
    font-size: 1.5rem;
    font-family: var(--fuente-bold);
    color: var(--color-primary);
    margin: 0 0 1rem 0;
  }
  &__container {
    background-image: linear-gradient(
      to left bottom,
      #b43ed5,
      #b148db,
      #ad52e1,
      #aa5ae6,
      #a662eb
    );
    border-radius: 4px;
    padding: 60px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    > div {
      text-align: center;
      width: 100%;
      margin: 0 0 1rem 0;
      color: var(--color-white);
      > div:first-child {
        font-family: var(--fuente-bold);
        font-size: 5rem;
        margin: 0 0 12px 0;
      }
      > div:last-child {
        font-size: 0.9rem;
      }
    }
    > div:last-child {
      margin: 0;
    }
  }
}

@media screen and (min-width: 768px) {
  .countDown {
    &__container {
      flex-wrap: nowrap;
      > div {
        margin: 0;
        > div:first-child {
          font-size: 5.5rem;
        }
      }
    }
  }
}

@media screen and (min-width: 992px) {
  .countDown {
    margin: 2rem 0 0 0;
  }
}
</style>
