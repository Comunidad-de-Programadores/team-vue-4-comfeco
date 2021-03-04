<template>
  <div class="infouser">
    <router-link to="/edit-my-account" class="infouser__edit">
      Editar Perfil
    </router-link>
    <div class="infouser__details">
      <img
        class="infouser__img"
        src="@/assets/images/userDefaultImage.png"
        alt="photo profile"
      />
      <h5 class="infouser__name">Nick Name</h5>
      <p class="infouser__profession">Frontend Developer/UI/UX</p>
      <p class="infouser__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ducimus
        voluptate, architecto quasi voluptatum neque facere aut voluptas vitae
        id dolorem
      </p>
    </div>
    <div class="infouser__footer"></div>
  </div>
</template>
<script>
export default {
  name: "PxInfoUser",
};
</script>
<style lang="scss" scoped>
.infouser {
  //width: 25%;
  height: 60vh;
  padding: 1rem;
  background: hsl(0, 1, 80);
  overflow: auto;

  &__edit {
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
  }
  &__details {
    text-align: center;
  }
  &__img {
    background: hsl(0, 1, 90);
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  &__name {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  &__profession {
    font-size: 13px;
    color: gray;
    margin-bottom: 1rem;
  }
  &__description {
    font-size: 13px;
    line-height: 1.5;
  }
}
</style>
