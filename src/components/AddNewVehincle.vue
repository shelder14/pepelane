<template>
  <div class="add-new-vehincle">
    <button class="add-new-vehincle__btn" @click="showSidePanel">
      Add new
    </button>
    <div class="side-panel" :class="{ 'side-panel_show': isShowSidePanel }">
      <div class="side-panel__head">
        <div class="side-panel__title">Add new vehicle</div>
        <div class="side-panel__close" @click="hideSidePanel">
          <svg width="14" height="14" viewBox="0 0 14 14">
            <path
              class="side-panel__close-icon"
              d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z"
            />
          </svg>
        </div>
      </div>
      <form action="" class="side-panel__form">
        <div class="input-image">
          <image-uploader
            :preview="true"
            :maxWidth="456"
            :maxHeight="200"
            :className="[
              'input-image__file-input',
              { 'fileinput--loaded': hasImage },
            ]"
            capture="environment"
            :debug="0"
            :autoRotate="true"
            outputFormat="verbose"
            @input="setImage"
          >
            <label
              for="fileInput"
              slot="upload-label"
              class="input-image__icon"
            >
              <svg width="22" height="20" viewBox="0 0 22 20">
                <path
                  d="M19 12V15H22V17H19V20H17V17H14V15H17V12H19ZM19.008 0C19.556 0 20 0.445 20 0.993V10.342C19.3576 10.1151 18.6813 9.99944 18 10V2H2L2.001 16L11.293 6.707C11.465 6.53448 11.694 6.43073 11.9371 6.41526C12.1802 6.39979 12.4206 6.47367 12.613 6.623L12.706 6.708L16.252 10.258C15.4766 10.4943 14.7572 10.8851 14.1369 11.407C13.5167 11.9288 13.0086 12.5709 12.6432 13.2944C12.2779 14.0179 12.0628 14.808 12.0111 15.6169C11.9593 16.4258 12.0719 17.2368 12.342 18.001L0.992 18C0.728813 17.9997 0.476497 17.895 0.290489 17.7088C0.104482 17.5226 -1.33455e-07 17.2702 0 17.007V0.993C0.00183004 0.730378 0.1069 0.479017 0.292513 0.293218C0.478126 0.107418 0.72938 0.00209465 0.992 0H19.008ZM6 4C6.53043 4 7.03914 4.21071 7.41421 4.58579C7.78929 4.96086 8 5.46957 8 6C8 6.53043 7.78929 7.03914 7.41421 7.41421C7.03914 7.78929 6.53043 8 6 8C5.46957 8 4.96086 7.78929 4.58579 7.41421C4.21071 7.03914 4 6.53043 4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4Z"
                  fill="#4959FF"
                />
              </svg>
            </label>
          </image-uploader>
        </div>
        <input
          type="text"
          class="side-panel__input"
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          class="side-panel__input"
          name="description"
          placeholder="Description"
        />
        <input
          type="text"
          class="side-panel__input"
          name="price"
          placeholder="Rent price"
        />
        <button type="submit" class="side-panel__btn">
          <span>Complete</span>
        </button>
      </form>
    </div>
    <div class="overlay" :class="{ overlay_show: isShowSidePanel }"></div>
  </div>
</template>
<script>
import Vue from "vue";
import ImageUploader from "vue-image-upload-resize";
Vue.use(ImageUploader);

export default {
  name: "AddNewVehincle",
  data() {
    return {
      isShowSidePanel: false,
      hasImage: false,
    };
  },
  methods: {
    setImage() {
      this.hasImage = true;
    },
    showSidePanel() {
      this.isShowSidePanel = true;
    },
    hideSidePanel() {
      this.isShowSidePanel = false;
    },
  },
};
</script>

<style lang="scss">
@import "../theme/styles/mixins.scss";
.add-new-vehincle {
  &__btn {
    border: none;
    outline: none;
    background: none;
    font-size: 20px;
    color: var(--blue);
    font-weight: 700;
    display:flex;
    align-items: center;
    @include media("max", "md") {
      font-size: 16px;
    }
    &:after {
      content: "+";
      color: var(--grey-light);
      border-radius: 16px;
      background: var(--blue);
      margin-left: 20px;
      line-height: 1;
      padding: 13px 18px;
      @include media("max", "md") {
        border-radius: 5px;
        margin-left: 5px;
        padding: 3px 5px;
        font-size: 12px;
        vertical-align: middle;
      }
    }
  }
}
.side-panel {
  box-sizing: border-box;
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0px;
  transform: translateX(600px);
  background: var(--primary-background-color);
  transition: transform 0.5s;
  width: 600px;
  height: 100vh;
  box-shadow: 10px 0 20px rgba(0, 0, 0, 0.4);
  padding: 0px 72px;
  border-radius: 48px 0 0 48px;
  overflow-y: scroll;
  @include media("max", "md") {
    width: 100%;
    border-radius: 0px;
    transform: translateX(100%);
  }
  &_show {
    transform: translateX(0);
  }
  &__title {
    font-weight: 500;
    font-size: 40px;
    margin: 20px 0;
    @include media("max", "md") {
      font-size: 24px;
    }
  }
  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__close {
    width: 48px;
    height: 48px;
    background: var(--secondary-background-color);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  &__close-icon {
    fill: var(--primary-text-color);
  }
  &__input {
    box-sizing: border-box;
    background: var(--secondary-background-color);
    font-size: 16px;
    width: 100%;
    margin-top: 16px;
    padding: 18px;
    border: none;
    border-radius: 12px;
    &::-webkit-input-placeholder {
      color: var(--secondary-text-color);
      font-weight: 300;
      font-size: 16px;
    }
    &::-moz-placeholder {
      color: var(--secondary-text-color);
      font-weight: 300;
      font-size: 16px;
    }
    &:-ms-input-placeholder {
      color: var(--secondary-text-color);
      font-weight: 300;
      font-size: 16px;
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue);
    height: 50px;
    color: var(--grey-light);
    font-size: 16px;
    width: 100%;
    border: none;
    border-radius: 12px;
    margin-top: 30px;
  }
}
.input-image {
  background: var(--secondary-background-color);
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  position: relative;
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    background: var(--primary-background-color);
    border-radius: 16px;
    position: relative;
  }
  &__file-input {
    display: none;
  }
}
.img-preview {
  position: absolute;
  left: 0;
  border-radius: 24px;
  top: 0;
  width: 100%;
}
.overlay {
  display: none;
  background: transparent;
  position: fixed;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 998;
  background: rgba(52, 79, 106, 0.7);
  &_show {
    display: block;
  }
}
</style>
