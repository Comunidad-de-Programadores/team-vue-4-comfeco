<template>
  <div class="modal" id="modal">
    <div class="flex">
      <div class="contenido-modal">
        <div class="modal-element modal-header flex">
          <h2 class="modal-element-text" v-text="title"></h2>
          <span class="button-close" id="close" @click="closeModal()"
            ><i class="fa fa-close"></i
          ></span>
        </div>
        <div class="modal-body">
          <p class="txtmodalbody">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            neque natus, repellat blanditiis labore a officiis velit doloribus
            hic recusandae eligendi, molestiae, illo ex? Porro similique fugiat
            dicta voluptates iure?
          </p>
        </div>
        <div class="modal-element modal-footer">
          <a href="#" @click="closeModal()">Aceptar Terminos y Condiciones</a>
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
  },
  /*data(){
      return{
        titlemodal: "",
      }
    }*/
  methods: {
    closeModal() {
      let cerrar = document.getElementById("modal");
      cerrar.style.display = "none";
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
  //display: none;
  position: fixed;
  z-index: 1000;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  &-element {
    padding: 8px;
    &-text {
      color: var(--color-black);
    }
  }
  &-header {
    border-bottom: 1px solid gray;
  }
  &-footer {
    text-align: center;
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
  animation: fade 1.2s;
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
}
</style>
