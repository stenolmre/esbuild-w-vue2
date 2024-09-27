<template lang="pug">
div#ba(:class="styles.active") BA |&nbsp;
  em lightblue
</template>

<script>
import * as styles from './b.module.scss'

export default {
  name: 'BA',

  data() {
    return {
      styles,
    }
  },
}
</script>
