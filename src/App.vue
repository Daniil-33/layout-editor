<template>
  <div class="app">
    <div class="app-editor__header">
      html editor
    </div>
    <div class="app-editor__body">
      <app-editor class="col-md-7" @edit="layoutList = $event" />
      <app-html-render class="col-md-5" :data="layoutList" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    'app-editor': () => import('./components/app-editor.vue'),
    'app-html-render': () => import('./components/app-html-render.vue'),
  },
  data() {
    return {
      layoutList: [],
    };
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
}

.app {
  &-editor {
    &__body {
      display: flex;
    }

    &__header {
      font-size: 18px;
      font-weight: 500;
      color: #000;
      text-transform: uppercase;
      padding: 20px 30px;
      border-bottom: 1px solid #E4E6F1;
    }
  }
}
</style>
