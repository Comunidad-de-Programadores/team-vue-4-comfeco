<template>
  <footer class="footer">
    <section class="footer__copy">
      <p>
        Copyright © 2021
      </p>
    </section>
    <section class="footer__logo">
      <a href="https://www.comfeco.com/" target="_blank">
        <img
          src="@/assets/images/Logo-comfeco-opción-2.png"
          alt="Logo comfeco"
        />
        <p>COMFECO</p>
      </a>
    </section>
    <section class="footer__social-media">
      <div class="footer__social-media--icons">
        <a href="https://www.facebook.com/comfeco" target="_blank">
          <i class="fab fa-facebook-square"></i>
        </a>
      </div>
      <div class="footer__social-media--icons">
        <a href="https://www.instagram.com/comfeco/" target="_blank">
          <i class="fab fa-instagram-square"></i>
        </a>
      </div>
      <div class="footer__social-media--icons">
        <a
          href="https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew"
          target="_blank"
        >
          <i class="fab fa-youtube-square"></i>
        </a>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "PxFooter",
};
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: auto;
  padding: 15px 1rem;
  text-align: center;
  font-family: var(--fuente-bold);
  border-top: 1px solid var(--color-primary);
  background: var(--color-primary);
  color: var(--color-white);
  box-shadow: 0px 0px 20px 3px rgba(0, 0, 0, 0.45);
  a {
    text-decoration: none;
    color: var(--color-white);
    outline: none;
  }
  &__copy,
  &__logo {
    margin: 0 0 1.5rem 0;
  }
  &__logo {
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 50px;
      margin: 0 0.5rem 0 0;
    }
    p {
      font-size: 14px;
    }
  }
  &__social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    &--icons {
      margin: 0 0 0 1rem;
      &:first-child {
        margin: 0;
      }
      i {
        font-size: 2rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    &__copy,
    &__logo {
      margin: 0;
    }
    &__logo {
      p {
        font-size: 1rem;
      }
    }
    &__social-media {
      &--icons {
        margin: 0 0 0 0.9rem;
      }
    }
  }
}
</style>
