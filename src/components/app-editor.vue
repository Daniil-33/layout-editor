/* eslint-disable global-require */
<template>
  <div class="app-editor">
    <div class="app-editor__component-selector col-md-4">
      <draggable
        class="dragArea app-editor__component-selector-inner"
        :list="components"
        :group="{ name: 'components', pull: 'clone', put: false }"
      >
        <div
          v-for="(item, index) in components"
          :key="index"
          class="app-editor__component-item"
          @click="addLayoutItem({index: layoutList.length, item})"
        >
          <div class="app-editor__component-item-inner">
            <div class="app-editor__component-item-icon">
              <img :src="item.icon">
            </div>
            <span>{{ item.type }}</span>
          </div>
        </div>
      </draggable>
    </div>
    <div class="app-editor__layout-area col-md-8">
      <div class="app-editor__layout-list">
        <draggable
          class="dragArea"
          ghost-class="app-editor__layout-item-inner"
          group="components"
          :list="layoutList"
          :class="{'app-editor__layout-list--empty': !layoutList.length}"
          @change="handleDrop"
        >
          <transition-group name="flip-list">
            <app-layout-item
              v-for="(item, index) in layoutList"
              :key="item.id"
              :item="item"
              :active="activeLayoutItem"
              @select="setActiveLayoutItem"
              @up="changeLayoutItemOrder({direction: 'up', currentIndex: index})"
              @down="changeLayoutItemOrder({direction: 'down', currentIndex: index})"
              @remove="removeLayoutItem(index)"
              @copy="addLayoutItem({index: index + 1, item})"
            />
          </transition-group>
        </draggable>
      </div>
    </div>
    <app-warning
      v-if="showWarning"
      :title="'Your browser width is too small'"
      :message="'Resize the browser width to be at least 770px wide and get back to the Editor.'"
    />
  </div>
</template>
<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import draggable from 'vuedraggable';

export default {
  components: {
    // 'app-component-item': () => import('./content/app-component-item.vue'),
    'app-layout-item': () => import('./content/app-layout-item.vue'),
    'app-warning': () => import('./content/app-warning.vue'),
    draggable,
  },
  data() {
    return {
      components: [
        {
          type: 'Headline',
          // eslint-disable-next-line global-require
          icon: require('../assets/icons/headline.svg'),
          html: 'h3',
          content: {
            placeholder: 'Type text here',
            default: 'This is my header',
          },
          value: '',
        },
        {
          type: 'Paragpaph',
          // eslint-disable-next-line global-require
          icon: require('../assets/icons/paragraph.svg'),
          html: 'p',
          content: {
            placeholder: 'Type text here',
            default: 'This is my paragraph',
          },
          value: '',
        },
        {
          type: 'Button',
          // eslint-disable-next-line global-require
          icon: require('../assets/icons/image.svg'),
          html: 'button',
          content: {
            placeholder: 'Type text here',
            default: 'Button',
          },
          value: '',
        },
        {
          type: 'Image',
          // eslint-disable-next-line global-require
          icon: require('../assets/icons/image.svg'),
          html: 'img',
          content: {
            placeholder: 'Type image source here',
            // eslint-disable-next-line global-require
            default: require('../assets/default.jpg'),
            attr: 'src',
          },
          value: '',
        },
      ], // List of default components
      layoutList: [], // List of elected & edited layout components
      activeLayoutItem: {}, // Selected layout item
      innerWidth: 0, // Window inner width
    };
  },
  computed: {
    showWarning() {
      return this.innerWidth < 770;
    },
  },
  watch: {
    layoutList: {
      deep: true,
      handler(val) {
        this.$emit('edit', val);
      },
    },
  },
  mounted() {
    this.innerWidth = window.innerWidth;

    // Check inner width of window, and if it < 770px we show warning message
    // See showWarning computed property
    // eslint-disable-next-line no-return-assign
    window.addEventListener('resize', () => this.innerWidth = window.innerWidth);
  },
  methods: {
    addLayoutItem({ index, item }) {
      this.layoutList.splice(index, 0, { ...item, id: this.randomId() });
      this.setActiveLayoutItem(this.layoutList[index]);// Set new added item as active
    },
    removeLayoutItem(index) {
      this.layoutList.splice(index, 1);
    },
    changeLayoutItemOrder({ direction, currentIndex }) {
      if (direction === 'up' && currentIndex === 0) return;
      if (direction === 'down' && currentIndex === this.layoutList.length - 1) return;

      const current = { ...this.layoutList[currentIndex] };
      const nextIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;

      this.layoutList.splice(currentIndex, 1);
      this.layoutList.splice(nextIndex, 0, current);
    },
    setActiveLayoutItem(item) {
      this.activeLayoutItem = item;
    },
    // Drag&Drop component in work-area callback
    handleDrop(item) {
      if (!item.added.element) return;

      this.layoutList.splice(item.added.newIndex, 1);
      this.$set(item.added.element, 'id', this.randomId());

      this.addLayoutItem({ index: item.added.newIndex, item: item.added.element });
    },
    randomId() {
      return Math.floor(Math.random() * 10000000);
    },
  },
};
</script>
<style lang="scss" >
.flip-list-move {
  transition: transform .2s;
}

.app-editor {
  display: flex;
  box-sizing: border-box;
  min-height: 91.5vh;

  &__component-selector {
    height: 100%;
  }

  &__component-selector-inner {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    position: sticky;
    top: 20px;
  }

  &__component-item {
    padding: 5px;
    cursor: pointer;
  }

  &__component-item-inner {
    transition: transform 1s;
    width: 100px;
    border-radius: 6px;
    background: #F6F9FE;
    padding: 10px;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid transparent;
    transition: all .2s linear;

    &:hover {
      border-color: #b1cdff;
      box-shadow: 4px 4px 25px -5px rgba(34, 60, 80, 0.2);
    }
  }

  &__component-item-icon {
    width: 25px;
    height: 25px;
    margin-bottom: 8px;

    & > img {
      width: 100%;
    }
  }

  &__layout-area {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background: #f5f5fc;
    border-left: 1px solid #E4E6F1;
  }
}

.app-editor__layout {
  &-item-inner {
    position: relative;
    width: 100%;
    max-width: unset !important;
    background: #F6F9FE;
    border-radius: 6px;
    padding: 15px;
    cursor: pointer;
    transition: all .2s linear;
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  &-list--empty > span {
    position: relative;
    min-height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
    border: 1px dashed #bdc4f0;
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.5);

    &:after {
      content: "Drag component here or just click on component in toolbar";
      display: block;
      position: absolute;
      text-align: center;
      width: 100%;
      top: 50%;
      left: 50%;
      font-size: 18px;
      font-weight: 500;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}
</style>
