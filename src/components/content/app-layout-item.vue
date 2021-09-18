<template>
  <div class="app-editor__layout-item">
    <transition name="slide-fade">
      <div
        v-if="isActive"
        class="app-editor__layout-tools"
      >
        <div class="app-editor__layout-tools-block">
          <button
            class="app-editor__layout-tools-btn"
            @click="$emit('up')"
          >
            <img :src="require('../../assets/icons/arrow-up.svg')" alt="up">
          </button>
          <button
            class="app-editor__layout-tools-btn"
            @click="$emit('down')"
          >
            <img :src="require('../../assets/icons/arrow-down.svg')" alt="down">
          </button>
        </div>
        <div class="app-editor__layout-tools-block">
          <button
            class="app-editor__layout-tools-btn"
            @click="$emit('remove')"
          >
            <img :src="require('../../assets/icons/trash.svg')" alt="trash">
          </button>
          <button
            class="app-editor__layout-tools-btn"
            @click="$emit('copy')"
          >
            <img :src="require('../../assets/icons/copy.svg')" alt="copy">
          </button>
        </div>
      </div>
    </transition>
    <div
      class="app-editor__layout-item-inner"
      :class="{'app-editor__layout-item--active': isActive}"
      @click="$emit('select', isActive ? {} : item)"
    >
      <div class="app-editor__layout-item-icon">
        <img :src="item.icon">
      </div>
      <div class="app-editor__layout-item-type">
        {{ item.type }}
      </div>
      <div
        v-if="isActive"
        class="app-editor__layout-item-edit"
        @click.stop
      >
        <input
          v-model="item.value"
          type="text"
          class="form-control"
          :placeholder="item.content.placeholder"
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // Layout element
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    // Selected layout item
    active: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    // Property to check is this layout element selected
    isActive() {
      return this.item.id === this.active.id;
    },
  },
};
</script>
<style lang="scss">
.slide-fade-enter-active {
  transition: all .2s linear;
  z-index: -1;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(100%);
  z-index: -1;
  opacity: 0;
}

.app-editor__layout {
  &-item {
    position: relative;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-item-inner {
    position: relative;
    width: 100%;
    max-width: unset;
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
    border: 1px solid transparent;

    &:hover {
      border-color: #b1cdff;
      box-shadow: 4px 4px 25px -5px rgba(34, 60, 80, 0.2);
    }
  }

  &-item-icon {
    width: 25px;
    height: 25px;
    margin-bottom: 8px;

    & > img {
      width: 100%;
    }
  }

  &-item--active {
    background: #D9E7FF;
    margin-top: 40px;
  }

  &-item-edit {
    width: 100%;

    & > input {
      width: 100%;
    }
  }

  &-tools {
    position: absolute;
    display: flex;
    right: 10px;
    bottom: 99%;
    z-index: 0;
  }

  &-tools-block {
    background: #449CF4;
    border-radius: 3px 3px 0 0;
    display: flex;
    margin-right: 5px;

    &:last-child {
      margin-right: 0;
    }
  }

  &-tools-btn {
    width: 30px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    outline: none;
    border: 0;
    background: transparent;
    transition: all .2s linear;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
</style>
