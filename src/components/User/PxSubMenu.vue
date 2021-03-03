<template>
    <div class="submenu">
        <button class="submenu__btn"><i class="fa fa-user"></i> Mi Perfil</button>
        <button class="submenu__btn"><i class="fa fa-star"></i> Insignias</button>
        <button class="submenu__btn"><i class="fa fa-users" ></i> Grupos</button>
        <button class="submenu__btn"><i class="fa fa-calendar"></i> Eventos</button>
    </div>
</template>
<script>
export default {
    name: "PxSubMenu",
}
</script>
<style lang="scss" scoped>
    .submenu{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: linear-gradient(hsl(285, 50, 70), hsl(285, 50, 80), hsl(285, 50, 85));
        width: 100%;
        height: 100px;
        margin: 0 0 50px 0;
        &__btn{
            height: 50px;
            width: 200px;
            border: 1px solid;
            border-radius: 3%;
        }
    }
</style>