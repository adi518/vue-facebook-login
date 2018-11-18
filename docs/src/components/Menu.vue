<template>
  <div :class="['v-menu', 'clearfix', classes]">
    <!-- We need to wrap token to fix Desktop Safari 5 -->
    <div
      :class="['token', { 'is-open': classes['is-open'] }]"
      :style="computedTokenStyle"
      @touchstart.passive="toggle"
      @click.stop.prevent="toggle"
    ></div>
    <ul
      ref="menu"
      :class="['menu', { 'is-open': classes['is-open'] }]"
      :style="computedMenuStyle"
      @touchstart.passive="() => {}"
    >    
      <li v-for="(route, index) in computedRoutes" :key="index" v-if="route.name">
        <router-link v-if="route.name" :to="{ name: route.name }" v-html="route.name"></router-link>
      </li>
      <template v-for="(item, index) in computedItems">
        <li :key="`item-${index}`" v-if="$slots[`item-${index + 1}`]">
          <slot :name="`item-${index + 1}`"></slot>
        </li>
      </template>
      <li v-if="$slots['last-child']">
        <slot name="last-child"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
// https://github.com/vuejs/vue-router/issues/800
// https://developer.mozilla.org/en-US/docs/Web/Events/mouseout
// https://developer.mozilla.org/en-US/docs/Web/Events/mouseleave
// https://gist.github.com/languanghao/5f74ca361f22192ba774941a69fd275b
// https://developers.google.com/web/updates/2016/06/passive-event-listeners
// https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing
// https://stackoverflow.com/questions/39589911/svg-image-not-working-in-safari-5-1-7-windows

import reject from 'lodash.reject'
import { flattenRoutes } from 'vue-flatten-routes'

export default {
  name: 'VMenu',
  props: {
    items: {
      type: String,
      default: '0'
    },
    routes: {
      type: Array,
      default: () => []
    },
    exclude: {
      type: Array,
      default: () => []
    },
    tokenStyle: {
      type: Object,
      default: () => ({})
    },
    menuStyle: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    flags: {
      open: false
    }
  }),
  watch: {
    'flags.open'(value) {
      this.emitToggle(value)
    }
  },
  mounted() {
    document.addEventListener('click', this.dismiss)
    document.addEventListener('touchstart', this.dismiss)

    window.addEventListener('resize', this.handleResize)
  },
  destroyed() {
    document.removeEventListener('click', this.dismiss)
    document.removeEventListener('touchstart', this.dismiss)

    window.removeEventListener('resize', this.handleResize)
  },
  computed: {
    classes() {
      return {
        'is-open': this.flags.open
      }
    },
    computedRoutes() {
      return reject(flattenRoutes(this.routes), route =>
        this.exclude.includes(route.name || route.path)
      )
    },
    computedItems() {
      return Array.from(Array(Number(this.items))).map(
        (item, index) => index + 1
      )
    },
    computedTokenStyle() {
      return Object.assign(
        {},
        {
          // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 196.32 170.02"><defs><style>.cls-1{fill:#42b883;}.cls-2{fill:#35495e;}</style></defs><title>logo</title><polygon class="cls-1" points="120.83 0 98.16 39.26 75.49 0 0 0 98.16 170.02 196.32 0 120.83 0"/><polygon class="cls-2" points="120.83 0 98.16 39.26 75.49 0 39.26 0 98.16 102.01 157.06 0 120.83 0"/></svg>
          backgroundImage: `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTYuMzIgMTcwLjAyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQyYjg4Mzt9LmNscy0ye2ZpbGw6IzM1NDk1ZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmxvZ288L3RpdGxlPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIxMjAuODMgMCA5OC4xNiAzOS4yNiA3NS40OSAwIDAgMCA5OC4xNiAxNzAuMDIgMTk2LjMyIDAgMTIwLjgzIDAiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTIwLjgzIDAgOTguMTYgMzkuMjYgNzUuNDkgMCAzOS4yNiAwIDk4LjE2IDEwMi4wMSAxNTcuMDYgMCAxMjAuODMgMCIvPjwvc3ZnPg==)`
        },
        this.tokenStyle
      )
    },
    computedMenuStyle() {
      return Object.assign(
        {},
        {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        this.menuStyle
      )
    }
  },
  methods: {
    toggle(state) {
      if ([true, false].includes(state)) {
        this.flags.open = state
      } else {
        this.flags.open = !this.flags.open
      }
      this.$emit('toggle', this.flags.open)
    },
    dismiss() {
      this.toggle(false)
    },
    async emitToggle(value) {
      this.$emit(value ? 'open' : 'close', { width: await this.getWidth() })
    },
    handleResize() {
      this.emitToggle(this.flags.open)
    },
    getWidth() {
      return new Promise(resolve => {
        window.requestAnimationFrame(() => {
          resolve(this.$refs.menu.getBoundingClientRect().width)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-menu {
  left: 1rem;
  bottom: 0.5rem;
  display: flex;
  direction: ltr;
  z-index: 999999;
  flex-direction: column;
  justify-content: flex-end;
}

.token {
  user-select: none; // Fix Firefox
  opacity: 0.5;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  z-index: 999999;
  left: 2rem;
  bottom: 3rem;
  display: flex;
  flex-shrink: 0;
  position: fixed;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 1.2rem 1.2rem;
  transition: transform 0.3s ease;
  transform: translate(-1.4rem, 1.4rem);

  &.is-open {
    left: auto;
    right: 2rem;
    opacity: 1;
    position: fixed;
    transform: translate(1.4rem, 1.4rem);
  }
}

.menu {
  top: 0;
  left: 0;
  bottom: 0;
  margin: 0;
  width: 50vw;
  z-index: 999999;
  flex-grow: 1;
  display: flex;
  overflow: auto;
  position: fixed;
  overflow-x: hidden; // Fix IE
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &.is-open {
    transform: translateX(0);
  }
}

.clearfix {
  &::after,
  &::before {
    height: 0;
    display: block;
    content: '\0020';
    overflow: hidden;
  }
  &::after {
    clear: both;
  }
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

li {
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  &:first-child {
    margin-top: 1rem;
  }
}

a {
  display: block;
  line-height: 1.5;
  white-space: nowrap;
  text-decoration: none;
  padding-bottom: 0.5rem;
  border-bottom: 0.2rem solid rgba(255, 255, 255, 0.05);

  &:hover {
    text-decoration: none;
  }
}
</style>
