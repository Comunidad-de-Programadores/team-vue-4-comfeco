<template>
  <footer class="footer">
    <section class="footer__goUp">
      <a href="#" class="footer__goUp--icon">
        <i class="fas fa-chevron-up"></i>
        Ir arriba
      </a>
    </section>
    <div class="footer-wraper">
      <div class="footer-wrapper">
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
        <section class="footer__copy">
          <p>
            Copyright © 2021
          </p>
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "PxFooter",
};
</script>

<style scoped lang="scss">
@import "../assets/sass/components/_footer.scss";
</style>
