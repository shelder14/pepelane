<template>
  <header class="header">
    <a href="/" class="header__logo">
      <img
        v-if="this.theme === 'darkMode'"
        class="header__logo-img"
        src="@/../src/theme/images/dark-mode-logo.svg"
        alt="Pеpelane"
      />
      <img
        v-else
        class="header__logo-img"
        src="@/../src/theme/images/logo.svg"
        alt="Pеpelane"
      />
    </a>
    <div class="header__text">World's first affordable airsharing</div>
    <div class="header__right">
      <div class="header__night-mod" @click="toggleTheme">
        <svg width="24" height="24" viewBox="0 0 24 24" class="header__icon">
          <path v-if="theme === 'darkMode'" d="M12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18ZM12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.515 4.929L4.929 3.515L7.05 5.636L5.636 7.05L3.515 4.93V4.929ZM16.95 18.364L18.364 16.95L20.485 19.071L19.071 20.485L16.95 18.364ZM19.071 3.514L20.485 4.929L18.364 7.05L16.95 5.636L19.071 3.515V3.514ZM5.636 16.95L7.05 18.364L4.929 20.485L3.515 19.071L5.636 16.95ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z" fill="#99A7B5"  />
          <path v-else d="M10 7C9.9998 8.39064 10.4138 9.74983 11.1892 10.9042C11.9646 12.0586 13.0663 12.9559 14.3538 13.4816C15.6412 14.0073 17.0561 14.1376 18.4179 13.8559C19.7797 13.5742 21.0268 12.8933 22 11.9V12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2H12.1C11.434 2.65113 10.9051 3.42896 10.5445 4.28768C10.1838 5.1464 9.99869 6.06862 10 7ZM4 12C3.99927 13.785 4.59553 15.5189 5.69389 16.926C6.79226 18.333 8.32963 19.3323 10.0614 19.7648C11.7932 20.1974 13.6199 20.0383 15.2508 19.313C16.8818 18.5876 18.2233 17.3377 19.062 15.762C17.5694 16.1136 16.0118 16.0781 14.5368 15.6587C13.0619 15.2394 11.7185 14.4501 10.6342 13.3658C9.54992 12.2815 8.76065 10.9381 8.34128 9.46318C7.92192 7.98821 7.88636 6.43056 8.238 4.938C6.95758 5.62014 5.88678 6.63766 5.14026 7.88164C4.39373 9.12562 3.99958 10.5492 4 12Z" fill="#99A7B5"/>
        </svg>
        <span class="header__night-mod-text">{{ themeToggleText }}</span>
        <div>
        </div>
      </div>
      <div>
        <svg width="20" height="18" viewBox="0 0 20 18" class="header__icon">
          <path d="M1.34126e-06 5.99401C-0.000525832 5.20621 0.154353 4.42605 0.455768 3.69819C0.757183 2.97034 1.19921 2.30909 1.75655 1.75231C2.31388 1.19553 2.97558 0.754165 3.70373 0.453478C4.43189 0.152791 5.21221 -0.00130701 6 8.35025e-06H14C17.313 8.35025e-06 20 2.69501 20 5.99401V18H6C2.687 18 1.34126e-06 15.305 1.34126e-06 12.006V5.99401ZM18 16V5.99401C17.9974 4.93451 17.5749 3.91925 16.8251 3.17063C16.0754 2.42201 15.0595 2.00106 14 2.00001H6C5.47485 1.99869 4.9546 2.10106 4.4691 2.30123C3.98359 2.50141 3.54238 2.79546 3.17076 3.16652C2.79914 3.53758 2.50443 3.97835 2.30353 4.46356C2.10262 4.94876 1.99947 5.46886 2 5.99401V12.006C2.00265 13.0655 2.42511 14.0808 3.17486 14.8294C3.9246 15.578 4.9405 15.999 6 16H18ZM12 8.00001H14V10H12V8.00001ZM6 8.00001H8V10H6V8.00001Z" fill="#99A7B5"/>
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24" class="header__icon">
          <circle cx="20" cy="4" r="3" fill="#F84AB3"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9994 10.9292C20.9998 10.9631 21 10.997 21 11.031V20H3V11.031C3 6.043 7.03 2 12 2C12.4291 2 12.8511 2.03013 13.2642 2.08841C13.0921 2.69603 13 3.33726 13 4C13 4.02378 13.0001 4.04753 13.0004 4.07126C12.6736 4.0243 12.3396 4 12 4C8.134 4 5 7.148 5 11.031V18H19V11.031C19 10.9969 18.9998 10.9629 18.9993 10.929C19.3261 10.9758 19.6602 11 20 11C20.3393 11 20.673 10.9759 20.9994 10.9292ZM13.7678 22.7678C14.2366 22.2989 14.5 21.663 14.5 21H9.5C9.5 21.663 9.76339 22.2989 10.2322 22.7678C10.7011 23.2366 11.337 23.5 12 23.5C12.663 23.5 13.2989 23.2366 13.7678 22.7678Z" fill="#99A7B5"/>
        </svg>
      </div>
      <div class="header__user">
        <div class="header__user-name">Bessie Cooper</div>
        <img
          src="@/../src/theme/images/user.jpg"
          alt="Bessie Cooper"
          class="header__user-img"
        />
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      theme: "",
      themeToggleText: "Night mod"
    };
  },
  methods: {
    toggleTheme() {
      if (this.theme === "darkMode") {
        this.theme = "";
        this.themeToggleText = "Night mod"
      } else {
        this.theme = "darkMode";
        this.themeToggleText = "Day mod"
      }
      document.documentElement.setAttribute("data-theme", this.theme); 
      localStorage.setItem("theme", this.theme); 
    },
  },
  mounted() {
    this.theme = localStorage.getItem("theme");
    document.documentElement.setAttribute("data-theme", this.theme);
  },
};
</script>

<style lang="scss">
@import "../theme/styles/mixins.scss";
.header {
  width: 100%;
  display: flex;
  padding: 40px 0;
  justify-content: space-between;
  align-items: center;
  &__icon {
    vertical-align: middle;
    margin-right: 15px;
  }
  &__text {
    font-size: 16px;
    font-weight: 300;
    color: var(--secondary-text-color);
    @include media("max", "xl") {
      display: none;
    }
  }
  &__right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-basis: 45%;
    @include media("max", "xl") {
      flex-basis: auto;
    }
  }
  &__logo {
    display: flex;
    vertical-align: middle;
    @include media("max", "sm") {
      max-width: 130px;
    }
  }
  &__logo-img {
    width: 100%;
  }
  &__night-mod {
    font-size: 16px;
    font-weight: 300;
    color: var(--secondary-text-color);
    cursor: pointer;
    width: 130px;
    white-space: nowrap;
    @include media("max", "md") {
      margin-right: 0px;
      width: auto;
    }
  }
  &__night-mod-text {
    @include media("max", "md") {
      display: none;
    }
  }
  &__user {
    display: inline-block;
    vertical-align: middle;
    @include media("max", "md") {
      margin-left: 15px;
    }
    @include media("max", "md") {
      margin-left: 0px;
    }
  }
  &__user-name {
    display: inline-block;
    vertical-align: middle;
    margin-right: 15px;
    font-weight: 500;
    font-size: 16px;
    @include media("max", "sm") {
      display: none;
    }
  }
  &__user-img {
    display: inline-block;
    vertical-align: middle;
    border-radius: 100%;
    @include media("max", "sm") {
      width: 32px;
      height: 32px;
    }
  }
}
</style>
