<template>
    <div class="flex comunidad">
        <div class="comunidad__img">
            <img :src="imagen" alt="imagen de la comunidad">
        </div>
        <div class="comunidad__name">
            <h4 v-text="titulo"></h4>
        </div>
        <div>
            <a class="comunidad__btn" :href="url">Unirme</a>
        </div>
    </div>
</template>
<script>
export default {
    name: "VComunidad",
    props:{
        imagen: String,
        titulo: String,
        url: String
    }
}
</script>
<style lang="scss">
    .flex {
        display: flex;

    }
    .comunidad{
        border-bottom: 1px solid hsl(280, 5, 30);
        margin: auto;
        padding: 25px;
        &__img{
            border-radius: 50%;
            margin-right: 2rem;
        }
        &__name{
            font-weight: 800;
            margin-right: 2rem;
        }
        &__btn{
            color: hsl(280, 50, 50);
            text-decoration: none;
            
            &:hover{
                color: hsl(280, 70, 50);
                cursor: pointer;
            }
        }
    }
</style>