<template>
  <section class="contador">
    <h4>{{title}}</h4>
    <div class="contador__container">
        <div class="contador__dias">
            <div class="contador__dias-dia">{{dias}}</div>
            <div class="contador__dias-texto">{{text_dia}}</div>
        </div>
        <div class="contador__horas">
            <div class="contador__horas-hora">{{horas}}</div>
            <div class="contador__horas-texto">{{text_horas}}</div>
        </div>
        <div class="contador__minutos">
            <div class="contador__minutos-minuto">{{minutos}}</div>
            <div class="contador__minutos-texto">{{text_minutos}}</div>
        </div>
        <div class="contador__segundos">
            <div class="contador__segundos-segundo">{{segundos}}</div>
            <div class="contador__segundos-texto">{{text_segundos}}</div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "AppCountdown",
    props: ['diaevento', 'title'],
    data(){
        return {
            dias:'',
            horas:'',
            minutos:'',
            segundos:'',
            text_dia:'',
            text_horas:'',
            text_minutos:'',
            text_segundos:''
        }
    },
    methods: {
        getTime() {
            var now = new Date();
            var y2k = new Date(this.diaevento);
            var days = (y2k - now) / 1000 / 60 / 60 / 24;
            var daysRound = Math.floor(days);
            var hours = (y2k - now) / 1000 / 60 / 60 - (24 * daysRound);
            var hoursRound = Math.floor(hours);
            var minutes = (y2k - now) / 1000 /60 - (24 * 60 * daysRound) - (60 * hoursRound);
            var minutesRound = Math.floor(minutes);
            var seconds = (y2k - now) / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
            var secondsRound = Math.round(seconds);
            this.text_segundos = (secondsRound == 1) ? " segundo" : " segundos";
            this.text_minutos = (minutesRound == 1) ? " minuto" : " minutos ";
            this.text_horas = (hoursRound == 1) ? " hora" : " horas ";
            this.text_dia = (daysRound == 1) ? " día" : " días ";
            this.dias = daysRound;
            this.horas = hoursRound;
            this.minutos = minutesRound;
            this.segundos = secondsRound;
            setTimeout(() => {
                this.getTime();
            }, 1000);
        }
    },
    mounted(){
        if (this.diaevento == "") {
            this.title = "Debe agregar una fecha para el evento.";
        } else {
            this.getTime();
        }        
    }
};
</script>

<style scoped lang="scss"></style>
