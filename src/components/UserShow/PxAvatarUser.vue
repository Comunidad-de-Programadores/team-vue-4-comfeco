<template>
  <section class="edit__user">
    <section class="edit__user--information">
      <form
        class="edit__user--information--form"
        @submit.prevent="saveInformationEditUser"
      >
        <div class="edit__user--information-photo">
          <img
            id="js_avatar-preview"
            alt="Foto de perfil del usuairo"
            :src="picture"
            data-src=""
          />
          <div v-if="editavatar" class="edit__user--information-photo-change">
            <label for="formFile" class="icon-camera">
              <i class="fas fa-camera-retro"></i>
              <input
                type="file"
                id="formFile"
                @change="previewImage"
                accept="image/*"
              />
            </label>
          </div>
        </div>

        <div
          v-if="imageData != null"
          class="edit__user--information-group-input"
        >
          <p>
            Progreso: {{ uploadValue.toFixed() + "%" }}
            <progress id="progress" :value="uploadValue" max="100"></progress>
          </p>
          <button @click="onUpload" class="button button-primary">
            Upload
          </button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
import firebase from "firebase";
// Import class autentication
import Autenticacion from "@/firebase/auth/autentication.js";
// Import class User
import User from "@/firebase/user/user.js";
// Inicializando firestore
const db = firebase.firestore();
export default {
  name: "PxAvatarUser",
  data() {
    return {
      imageData: null,
      picture: null,
      uploadValue: 0,
      currentUser: null,
      editavatar: true,
    };
  },
  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.picture = url;
            document
              .getElementById("js_avatar-preview")
              .setAttribute("data-src", this.imageData.name);
            this.saveAvatarUser();
          });
        }
      );
    },
    async saveAvatarUser() {
      // Guardar los datos actuales ingresados en el formulario
      this.userClass.updateAvatarUser(
        this.currentUser.uid,
        this.imageData.name
      );
      this.$swal({
        title: "Avatar actualizado satisfactoriamente! 😄",
        icon: "success",
        confirmButtonText: "OK",
      });
    },
  },
  computed: {
    authClass() {
      const auth = new Autenticacion();
      return auth;
    },
    userClass() {
      const user = new User();
      return user;
    },
  },
  async created() {
    this.currentUser = await this.authClass.authUser();
    if (
      this.currentUser.providerData[0].providerId === "google.com" ||
      this.currentUser.providerData[0].providerId === "facebook.com"
    ) {
      this.editavatar = false;
    }
  },
};
</script>

<style scoped lang="scss">
#formFile {
  display: none;
}
@import "../../assets/sass/components/_edit-account.scss";
</style>
