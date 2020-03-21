<template>
  <Markdown :markdown="readme" />
</template>

<script>
import readme from '../../../../README-1.x.md'

export default {
  data: () => ({ readme })
}
</script>
