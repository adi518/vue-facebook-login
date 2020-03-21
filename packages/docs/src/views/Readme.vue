<template>
  <Markdown :markdown="readme" />
</template>

<script>
import readme from '../../../../README.md'

export default {
  data: () => ({ readme })
}
</script>
