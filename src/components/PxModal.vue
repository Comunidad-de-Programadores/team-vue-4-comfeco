<template>
  <div class="modal" id="modal">
    <div class="flex">
      <div class="contenido-modal" id="js_contenido-modal">
        <div class="modal-element modal-header">
          <h2 class="modal-element-text" v-text="title"></h2>
          <span class="button-close" id="close" @click="closeModal()"
            ><i class="fa fa-close"></i
          ></span>
        </div>
        <div class="modal-body">
          <p class="txtmodalbody" v-text="txtbody"></p>
        </div>
        <div class="modal-element modal-footer">
          <a href="#" @click="closeModal()" class="button button-primary">
            Aceptar {{ txtbutton }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VModal",
  props: {
    title: String,
    txtbody: String,
    txtbutton: String,
  },
  methods: {
    closeModal() {
      let $modal = document.getElementById("modal");
      let $contentModal = document.getElementById("js_contenido-modal");
      $contentModal.classList.remove("fadeIn");
      setTimeout(() => {
        $modal.classList.remove("visible");
        $modal.classList.add("hidden");
        document.body.classList.remove("no-scroll");
      }, 500);
      $contentModal.classList.add("fadeOut");
    },
  },
};
</script>
<style scoped lang="scss">
.flex {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  transition: var(--transition);
  &.hidden {
    display: none;
    opacity: 0;
  }
  &.visible {
    display: block;
    opacity: 1;
  }
  &-element {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-text {
      color: var(--color-black);
    }
  }
  &-header {
    border-bottom: 1px solid gray;
  }
  &-footer {
    text-align: center;
    .button.button-primary {
      padding: 10px;
      text-decoration: none;
    }
  }
}
.contenido-modal {
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  margin: auto;
  width: 90%;
  max-width: 600px;
  padding: 15px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.946);
}
.contenido-modal.fadeIn {
  animation: fadeIn 0.8s forwards;
}
.contenido-modal.fadeOut {
  animation: fadeOut 0.8s forwards;
}
.button-close {
  background: #cf1717;
  color: #f2f2f2;
  font-size: 30px;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: red;
    cursor: pointer;
  }
}
.txtmodalbody {
  padding-top: 20px;
  text-align: justify;
  letter-spacing: 0.5px;
  line-height: 22px;
  margin: 0 0 8px 0;
  max-height: 300px;
  overflow: auto;
}
</style>
