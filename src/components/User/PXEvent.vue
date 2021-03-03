<template>
    <div class="evento">
        <div class="evento__header">
            <p class="evento__title">Eventos de tu Interes</p>
            <router-link to="/eventos" class="evento-link">
                Ver más
            </router-link>
        </div>
        <div class="evento__body">
            <img class="evento__body__img" src="@/assets/images/Logo-comfeco-opción-1.png" alt="Logo del Evento">
            <h5 class="evento__title evento__title-ml1">Comunidad Fest and Code</h5>
            <div class="center-btn">
                <button class="evento__body__btn">Más Información</button>
            </div>
        </div>
        <div class="evento__body">
            <img class="evento__body__img" src="@/assets/images/Logo-comfeco-opción-1.png" alt="Logo del Evento">
            <h5 class="evento__title evento__title-ml1">Comunidad Fest and Code</h5>
            <div class="center-btn">
                <button class="evento__body__btn">Más Información</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PxEvent",
    data() {
        return {
            
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
    .evento{
        //width: 25%;
        height: 60vh;
        padding: 1rem;
        background: hsl(0, 1, 80);
        overflow: auto;
        &__title{
            color: #ffffff;
            font-size: 16px;
            &-ml1{
                margin-left: 0.5rem;
            }
        }
        &__header{
            display: flex;
            justify-content: space-between;
            margin-bottom: 3rem;
        }
        &-link{
            text-decoration: none;
            font-size: 14px;
        }
        &__body{
            width: 100%;
            height: 60%;
            margin-bottom: 2rem;
            background: linear-gradient(to bottom right, hsl(290, 50, 50), hsl(285,50,50), hsl(280,50,50));
            &__img{
                width: 100%;
                margin-bottom: 2rem;
            }
            &__btn{
                padding: 1em;
                border-radius: 0.5em;
                font-weight: 700;
                background: hsl(0, 1, 65);
                color: #ffffff;
            }
            .center-btn{
                margin-top: 1rem;
                text-align: center;
            }
        }
    }
</style>