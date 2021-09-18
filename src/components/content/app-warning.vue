<template>
  <div class="extension-warning__wrap">
    <div class="extension-warning__message-box">
      <img src="../../assets/icons/warn.svg" alt="">
      <div class="d-flex flex-column">
        <h3 class="text-light">{{ title }}</h3>
        <p class="text-light">{{ message }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // Title of modal window
    title: {
      type: String,
      default() {
        return 'Warning!';
      },
    },
    // Text message of modal window
    message: {
      type: String,
      default() {
        return '';
      },
    },
  },
};
</script>
<style lang="scss">
.extension-warning {
  &__wrap {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
  }

  &__inner {
    position: relative;
  }

  &__message-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 6px;
    background: rgba(0, 0, 0, 0.6);
    padding: 15px;

    display: flex;
    align-items: center;
  }

  &__text-content {
    display: flex;
    flex-direction: column;
  }
}
</style>
