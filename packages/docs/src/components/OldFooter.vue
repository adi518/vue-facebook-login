<template>
  <footer class="footer">
    <v-container>
      <div class="credit">
        <span class="d-flex">Made by</span>
        <div class="d-flex">
          <a href="https://github.com/adi518" target="_blank"
            >🦊&nbsp;@adi518</a
          >
          <a href="https://github.com/iliran11" target="_blank"
            >🐉&nbsp;@iliran11</a
          >
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script>
import VContainer from '@/components/Container'

export default {
  components: { VContainer }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 2rem;
  padding-top: 2rem;
  min-height: 20rem;
  background-color: #2f4480;
}

.credit {
  color: #8b9dc3;
  line-height: 3.5;
  display: inline-block;

  a {
    min-width: 8rem;
    position: relative;
    text-decoration: none;
    transition: color var(--common-transition-time);

    &:not(:first-child) {
      margin-left: 0.5rem;
    }

    &:hover {
      text-decoration: none;
      color: lighten(#8b9dc3, 10%);

      &::before {
        background-color: lighten(#8b9dc3, 10%);
      }
    }

    &::before {
      content: '';
      height: 1px;
      width: 100%;
      position: absolute;
      background-color: #8b9dc3;
      transition: background-color var(--common-transition-time);
    }
  }
}
</style>
