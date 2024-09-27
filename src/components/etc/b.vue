<template lang="pug">
div#b(:class="styles.active") B
</template>

<script>
import * as styles from './b.module.scss'

export default {
  name: 'b',

  data() {
    return {
      styles,
    }
  },
}
</script>
