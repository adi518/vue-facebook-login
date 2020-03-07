<template>
  <footer class="footer">
    <v-container>
      <div class="credit">
        Made with <v-heart></v-heart> by
        <a href="https://github.com/adi518">Adi Sahar</a>
      </div>
    </v-container>
  </footer>
</template>

<script>
import VHeart from '@/components/Heart'
import VContainer from '@/components/Container'

export default {
  props: {
    pkg: {
      type: Object,
      required: true
    }
  },
  components: {
    VHeart,
    VContainer
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 2rem;
  padding-top: 2rem;
  min-height: 20rem;
  background-color: #0c1121;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.credit {
  color: #8b9dc3;
}
</style>
