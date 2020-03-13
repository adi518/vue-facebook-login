<template>
  <v-markdown :markdown="readme"></v-markdown>
</template>

<script>
import readme from '../../../../README.md'
import VMarkdown from '@/components/Markdown'

export default {
  components: { VMarkdown },
  data: () => ({ readme })
}
</script>
