<template>
    <div class="events">
        <h2 class="events__title">Eventos Activos</h2>
        <div class="events__body">
            <div class="events__card">
                <div class="events__cardHeader">
                    <img src="assets/images/vuejslogo.jpg" alt="evento" class="events__img">
                </div>
                <div class="events__cardBody">
                    <p class="events__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente blanditiis repellat at laboriosam ipsa corrupti!
                    </p>
                </div>
                <div class="events__cardFooter">
                    <a href="#" class="events__btn events__btn--secondary">Mas Información</a>
                    <button class="events__btn events__btn--primary">Participar</button>
                </div>
            </div>
            <div class="events__card">
                <div class="events__cardHeader">
                    <img src="assets/images/vuejslogo.jpg" alt="evento" class="events__img">
                </div>
                <div class="events__cardBody">
                    <p class="events__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente blanditiis repellat at laboriosam ipsa corrupti!
                    </p>
                </div>
                <div class="events__cardFooter">
                    <a href="#" class="events__btn events__btn--secondary">Mas Información</a>
                    <button class="events__btn events__btn--primary">Participar</button>
                </div>
            </div>
            <div class="events__card">
                <div class="events__cardHeader">
                    <img src="assets/images/vuejslogo.jpg" alt="evento" class="events__img">
                </div>
                <div class="events__cardBody">
                    <p class="events__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sapiente blanditiis repellat at laboriosam ipsa corrupti!
                    </p>
                </div>
                <div class="events__cardFooter">
                    <a href="#" class="events__btn events__btn--secondary">Mas Información</a>
                    <button class="events__btn events__btn--primary">Participar</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  name: "PxEvents",
};
</script>
<style lang="scss" scoped>
    .events{
        margin: 11rem auto 1rem;
        &__title{
            color: black;
            margin: 2rem auto;
            text-align: center;
        }
        &__body{
            width: 100%;
            display: grid;
            grid-template-columns: 33% 33% 33%;
            grid-template-rows: auto;
            grid-column-gap: 1rem;
        }
        &__card{
            height: 45vh;
            margin: 0.5rem 1rem 0.5rem 0rem;
            background: lightgray;
        }
        &__cardBody{
            margin: 1rem;
        }
        &__cardFooter{
            display: flex;
            justify-content: space-between;
            margin: 0.5rem;
        }
        &__description{
            text-align: justify;
        }
        &__btn{
            padding: 0.5rem 1.5rem;
            &--primary{
                border: 1px solid;
                background: lightgray;
                border-radius: 1rem;
            }
            &--secondary{
                text-decoration: none;
            }
        }
        &__img{
            width: 100%;
            height: 25vh;
        }
    }
</style>