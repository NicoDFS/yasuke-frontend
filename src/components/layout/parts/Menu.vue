<template>
  <div v-click-outside="closeMenu" class="header__menu" @click="toggleIsOpen">
    <div class="burger">
      <svg
        class="burger__image"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
      </svg>
      <span class="burger__text">{{ $t("common.menu") }}</span>
    </div>
    <ul class="navigation" :class="{ navigation__open: isOpenMenu }">
      <li
        v-for="item in menuItems"
        :key="item.key"
        class="navigation__item"
        :class="{ 'navigation__item--disabled': item.disabled }"
      >
        <router-link v-if="item.rout" class="navigation__link" :to="item.path">
          <component
            v-if="item.iconComponent"
            :is="item.iconComponent"
            class="navigation__link__img"
            size="20"
          />
          <svg
            v-if="item.iconClass === 'list-ul'"
            class="navigation__link__img"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 6h2v2H4zm0 5h2v2H4zm0 5h2v2H4zm16-8H8V6h12zm0 5H8v-2h12zm0 5H8v-2h12z"
            ></path>
          </svg>
          {{ $t(`common.${item.key}`) }}
          <span v-if="item.soon" class="soon"> ({{ $t("common.soon") }}) </span>
        </router-link>

        <a
          v-if="!item.rout"
          class="navigation__link"
          rel="noopener noreferrer nofollow"
          :href="item.path"
        >
          <component
            v-if="item.iconComponent"
            :is="item.iconComponent"
            class="navigation__link__img"
            size="20"
          />
          {{ $t(`common.${item.key}`) }}
          <span v-if="item.soon" class="soon"> ({{ $t("common.soon") }}) </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import menuHelper from "~/mixins/menuHelper";
import {
  LineChart,
  ArrowLeftRight,
  Wallet,
  DollarSign,
  CreditCard,
  Trophy,
  ListPlus,
  Rocket,
  TrendingUp,
  Shield,
} from "lucide-vue-next";

export default {
  name: "MenuBlock",
  components: {
    LineChart,
    ArrowLeftRight,
    Wallet,
    DollarSign,
    CreditCard,
    Trophy,
    ListPlus,
    Rocket,
    TrendingUp,
    Shield,
  },
  mixins: [menuHelper],
  computed: {
    ...mapGetters({ profile: "core/profile" }),
    menuItems() {
      const items = [
        {
          key: "wallet",
          iconComponent: "Wallet",
          path: "/wallet",
          rout: true,
        },
        {
          key: "buysell",
          iconComponent: "LineChart",
          path: "/trade/BTC-USDT",
          rout: true,
        },
        {
          key: "exchange",
          iconComponent: "ArrowLeftRight",
          path: "/quick-swap",
          rout: true,
        },
        {
          key: "card",
          iconComponent: "CreditCard",
          path: "https://yasuke.exchange/coming-soon",
          rout: false,
          soon: true,
        },
        {
          key: "trading_competition",
          iconComponent: "Trophy",
          path: "https://yasuke.exchange/coming-soon",
          rout: false,
          soon: true,
        },
        {
          key: "token_listing",
          iconComponent: "ListPlus",
          path: "https://yasuke.exchange/token-listing",
          rout: false,
        },
        {
          key: "ieo",
          iconComponent: "Rocket",
          path: "https://yasuke.exchange/ieo",
          rout: false,
        },
        {
          key: "market_making",
          iconComponent: "TrendingUp",
          path: "https://yasuke.exchange/coming-soon",
          rout: false,
          soon: true,
        },
        {
          key: "aml_kyc",
          iconComponent: "Shield",
          path: "https://yasuke.exchange/kyc-policy",
          rout: false,
        },
        {
          key: "fees",
          iconClass: "list-ul",
          path: "/fees",
          rout: true,
        },
      ];
      return items;
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  position: absolute;
  font-family: "Open Sans", arial, sans-serif;
  min-width: 210px;
  background-color: #fff;
  top: 40px;
  right: 40px;
  opacity: 0;
  visibility: hidden;
  height: 0;
  transition: height 0.05s ease-in;
  z-index: 1;
  max-height: 80vh;
  overflow-y: auto;

  &__link {
    color: #19243c;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    font-size: 16px;
    padding: 0.5rem;

    &:hover {
      color: black;
      text-decoration: none;
      background-color: #dcdcdc;
    }

    img {
      margin-left: 15px;
    }
  }

  &__open {
    height: auto;
    opacity: 1;
    visibility: visible;
    position: absolute;
    background-color: #fff;
    top: 40px;
    right: 40px;
    z-index: 1;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: 0px;
    padding: 0;
  }

  &__item {
    height: 50px;

    .soon {
      color: red;
      font-weight: 200;
      font-size: 10px;
      text-transform: lowercase;
      margin-left: 5px;
    }

    &--disabled {
      pointer-events: none;
      opacity: 0.75;
    }

    .wallet-margin-fix {
      margin-right: 22px;
    }

    &.router-link-active {
      background-color: #f3f3f3;
    }
  }
}

.fa {
  margin: 0 27px 0 3px;
  font-size: 20px;
}

.navigation {
  .fa-line-chart {
    margin-right: 24px;
  }

  .fa-users {
    margin-right: 25px;
  }

  .fa-fw {
    margin-right: 20px;
  }
}
.navigation__link__img {
  margin-right: 20px;
  margin-left: 0;
  color: currentColor;
}
</style>
