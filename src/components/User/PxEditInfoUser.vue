<template>
  <section class="edit__user">
    <section class="edit__user--information">
      <button class="edit__user--close-button">
        <i class="fas fa-arrow-left"></i>
      </button>
      <h2>
        Editar perfil
      </h2>
      <form action="" class="edit__user--information--form">
        <div class="edit__user--information-photo">
          <img src="@/assets/images/userDefaultImage.png" alt="Perfil User" />
          <div class="edit__user--information-photo-change">
            <button>
              <i class="fas fa-camera-retro"></i>
            </button>
          </div>
        </div>

        <div class="edit__user--information-group-input two">
          <div class="edit__user--information-input">
            <label for="nick">
              Nick:
            </label>
            <input type="text" id="nick" placeholder="Tu nick" />
          </div>
          <div class="edit__user--information-input">
            <label for="Correo">
              Correo:
            </label>
            <input type="text" id="Correo" placeholder="Tu correo" />
          </div>
        </div>
        <div class="edit__user--information-group-input three">
          <div class="edit__user--information-input">
            <label>
              Genero:
            </label>
            <select id="js_select-gender">
              <option value="0">Elige tu género</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="NA">No quiero especificar</option>
            </select>
          </div>
          <div class="edit__user--information-input">
            <label for="js_select-born">
              Fecha de nacimiento:
            </label>
            <input type="date" id="js_select-born" />
          </div>
          <div class="edit__user--information-input">
            <label for="js_select-born">
              País:
            </label>
            <select id="js_select-country">
              <option value="0">Elije tu país</option>
              <option value="0">Perú</option>
              <option value="0">Costa Rica</option>
            </select>
          </div>
        </div>

        <h2>Cambiar mi contraseña:</h2>
        <div class="edit__user--information-group-input two">
          <div class="edit__user--information-input">
            <label for="js_password">
              Contraseña:
            </label>
            <input
              type="password"
              id="js_password"
              placeholder="Contraseña nueva"
            />
          </div>
          <div class="edit__user--information-input">
            <label for="js_password-repeat">
              Repetir Contraseña:
            </label>
            <input
              type="password"
              id="js_password-repeat"
              placeholder="Repetir contraseña nueva"
            />
          </div>
        </div>

        <h2>Mis redes sociales:</h2>
        <div class="edit__user--information-group-input social-media">
          <div class="edit__user--information-input">
            <label for="js_social_facebook">
              <i class="fab fa-facebook"></i>
              facebook.com/
            </label>
            <input
              type="text"
              id="js_social_facebook"
              placeholder="Url de facebook"
            />
          </div>
          <div class="edit__user--information-input">
            <label for="js_social_linkedin">
              <i class="fab fa-linkedin"></i>
              linkedin.com/in/
            </label>
            <input
              type="text"
              id="js_social_linkedin"
              placeholder="Url de linkedin"
            />
          </div>
          <div class="edit__user--information-input">
            <label for="js_social_github">
              <i class="fab fa-github"></i>
              github.com/
            </label>
            <input
              type="text"
              id="js_social_github"
              placeholder="Url de github"
            />
          </div>
          <div class="edit__user--information-input">
            <label for="js_social_twitter">
              <i class="fab fa-twitter"></i>
              Twitter.com/
            </label>
            <input
              type="text"
              id="js_social_twitter"
              placeholder="Url de twitter"
            />
          </div>
        </div>

        <h2>Sobre mi:</h2>
        <div class="edit__user--information-group-input">
          <div class="edit__user--information-input">
            <label for="js_biography">
              Biografía:
            </label>
            <textarea id="js_biography" cols="30" rows="2"></textarea>
          </div>
        </div>
        <div class="edit__user--information-group-input">
          <button class="button button-primary">
            Guardar cambios
          </button>
        </div>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  name: "PxEditInfoUser",
};
</script>

<style scoped lang="scss">
.edit__user {
  display: none !important;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: var(--color-white);
  z-index: 80;
  padding: 1rem;
  &--close-button {
    i {
      font-size: 1.5rem;
    }
  }
  &--information {
    overflow-y: auto;
    max-height: 95vh;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    h2 {
      color: var(--color-black);
      font-size: 1.6rem;
      text-align: center;
      margin: 0.8rem 0;
    }
    &-photo {
      max-width: 100px;
      height: 100px;
      margin: 0 auto;
      border: 4px solid var(--color-icons);
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &-change {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 35px;
        width: 100%;
        button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 0;
          background: var(--color-icons);
          color: var(--color-white);
          transition: var(--transition);
          border-top: 4px solid var(--color-icons);
          i {
            font-size: 15px;
          }
          &:hover {
            background: var(--color-white);
            i {
              color: var(--color-icons);
            }
          }
        }
      }
    }
    &-group-input {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0.8rem 0;
      &.two {
        .edit__user--information-input {
          width: 48%;
        }
      }
      &.social-media {
        .edit__user--information-input {
          display: flex;
          justify-content: space-between;
          align-items: center;
          label {
            margin: 0;
          }
          input {
            width: auto;
          }
        }
      }
    }
    &-input {
      width: 100%;
      margin: 0 0 12px 0;
      textarea {
        display: block;
        width: 100%;
        resize: none;
      }
      label {
        margin: 0 0 6px 0;
        display: inline-block;
      }
      input,
      select,
      textarea {
        border: 1px solid var(--color-icons);
        padding: 0;
        margin: 0;
        width: 100%;
        padding: 0.5rem;
        font-family: var(--fuente-regular);
      }
    }
  }
}
@media screen and (min-width: 992px) {
  .edit__user {
    position: unset;
    height: auto;
    &--information {
      overflow-y: unset;
      max-height: unset;
    }
  }
}
</style>
