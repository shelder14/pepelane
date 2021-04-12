<template>
  <div class="vih-page">
    <div class="vih-page__img">
      <img :src="image" :alt="name" />
    </div>
    <div class="vih-page__right-block">
      <h1 class="vih-page__title">{{ name }}</h1>
      <ul class="types-nav">
        <li>
          <router-link
            :to="'/vehincle/' + this.$route.params.id + '/specifications'"
            tag="a"
            class="types-nav__item"
          >
            Specifications
          </router-link>
        </li>
        <li>
          <router-link
            :to="'/vehincle/' + this.$route.params.id + '/team'"
            tag="a"
            class="types-nav__item"
          >
            Team
          </router-link>
        </li>
        <li>
          <router-link
            :to="'/vehincle/' + this.$route.params.id + '/rentterms'"
            tag="a"
            class="types-nav__item"
          >
            Rent terms
          </router-link>
        </li>
      </ul>

      <div class="types">
        <router-view
          :specificationsText="specificationsText"
          :teamText="teamText"
          :termText="termText"
        ></router-view>
      </div>
      <div class="types__title">Features:</div>
      <div class="features">
        <div class="features__icon">
          <svg width="30" height="24" viewBox="0 0 30 24">
            <path
              d="M16.3333 18.584V21.3333H23V24H7V21.3333H13.6667V18.584C11.0889 18.2589 8.71842 17.0044 7 15.0557C5.28158 13.107 4.33338 10.5981 4.33333 8V0H25.6667V8C25.6666 10.5981 24.7184 13.107 23 15.0557C21.2816 17.0044 18.9111 18.2589 16.3333 18.584ZM0.333332 2.66667H3V8H0.333332V2.66667ZM27 2.66667H29.6667V8H27V2.66667Z"
              fill="#677B8F"
            />
          </svg>
        </div>
        <div class="features__description">
          <div class="features__title">A challenge for a true champion</div>
          <div class="features__text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </div>
        </div>
      </div>
      <div class="features">
        <div class="features__icon">
          <svg width="22" height="28" viewBox="0 0 22 28">
            <path
              d="M14.9413 18.752C18.4867 20.1627 21.096 23.4187 21.584 27.3333H0.416004C0.904004 23.4187 3.51334 20.1627 7.05867 18.752L11 24.6667L14.9413 18.752ZM19 0.666656V8.66666C19 13.0853 15.4187 16.6667 11 16.6667C6.58134 16.6667 3 13.0853 3 8.66666V0.666656H19ZM16.3333 8.66666H5.66667C5.66667 11.6133 8.05334 14 11 14C13.9467 14 16.3333 11.6133 16.3333 8.66666Z"
              fill="#677B8F"
            />
          </svg>
        </div>
        <div class="features__description">
          <div class="features__title">Pilot's sweaty hands</div>
          <div class="features__text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </div>
        </div>
      </div>
      <div class="rent-for">
        <div class="rent-for__text">
          Rent for <span class="rent-for__text_price">164 $/h</span>
        </div>
        <button class="rent-for__btn">Rent now</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VehunclePage",
  data: function () {
    return {
      name: "",
      image: "",
    };
  },
  created() {
    const {
      name,
      image,
      specifications_text: specificationsText,
      team_text: teamText,
      term_text: termText,
    } = this.$store.getters.getVehicle(this.$route.params.id);
    this.name = name;
    this.image = image;
    this.specificationsText = specificationsText;
    this.teamText = teamText;
    this.termText = termText;
  },
};
</script>
<style lang="scss">
@import "../theme/styles/mixins.scss";
.vih-page {
  display: flex;
  @include media("max", "md") {
    display: block;
  }
  &__img {
    max-width: 712px;
    margin-right: 65px;
    min-width: 55%;
    @include media("max", "xl") {
      min-width: auto;
    }
    @include media("max", "md") {
      margin: 0;
    }
    img {
      border-radius: 24px;
      max-width: 100%;
    }
  }
  &__title {
    margin-top: 65px;
    margin-bottom: 40px;
  }
}
.types-nav {
  list-style: none;
  display: flex;
  margin-bottom: 32px;
  padding: 0;
  &__item {
    color: var(--secondary-text-color);
    text-decoration: none;
    font-size: 16px;
    margin-right: 32px;
    @include media("max", "sm") {
      margin-right: 16px;
    }
    &.router-link-active {
      color: var(--primary-text-color);
    }
  }
}
.rent-for {
  background: var(--secondary-background-color);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  @include media("max", "sm") {
    height: 65px;
    padding: 0 15px;
  }
  &__text {
    font-size: 20px;
    font-weight: 500;
    @include media("max", "sm") {
      font-size: 16px;
    }
    &_price {
      color: var(--pink);
    }
  }
  &__btn {
    display: inline-block;
    background: #4959ff;
    border-radius: 12px;
    padding: 17px 32px;
    line-height: 1;
    color: var(--primary-background-color);
    font-size: 16px;
    border: none;
    font-family: Codec Pro;
    outline: none;
    @include media("max", "sm") {
      padding: 12px 25px;
    }
  }
}
</style>