<template>
  <div class="app-editor__html-render">
    <div
      class="app-editor__html-render-content"
      v-html="htmlString"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    // Array of layout components
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    // Html-string property to render
    htmlString() {
      return this.renderHtml(this.data);
    },
  },
  methods: {
    // Method which get array of components and return html-string
    renderHtml(dataArray) {
      const html = dataArray.reduce((accumulator, current) => {
        const element = document.createElement(current.html);

        element[current.content.attr || 'textContent'] = (current.value || current.content.default);

        return accumulator + element.outerHTML;
      }, '');

      return html;
    },
  },
};
</script>
<style lang="scss">
.app-editor {
  &__html-render {
    box-sizing: border-box;
    padding: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  &__html-render-content {
    width: 100%;
    max-width: 100%;

    img {
      max-width: 100%;
      display: block;
      margin: 10px auto;
      border-radius: 6px;
    }

    p {
      font-weight: 400;
      text-align: center;
      color: #97AACD;
    }

    h3 {
      text-align: center;
      font-weight: 700;
    }

    button {
      display: block;
      margin: 10px auto;
      border-radius: 4px;
      cursor: pointer;
      border: 0;
      padding: 10px 30px;
      background: #4368E0;
      color: #F6F9FE;
      font-weight: 500;
      font-size: 14px;
    }
  }
}
</style>
