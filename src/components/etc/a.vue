<template lang="pug">
div#a(:class="styles.active") A -- Watch changes
</template>

<script>
import styles from './a.module.css'

export default {
  name: 'a',

  data() {
    return {
      styles,
    }
  },
}
</script>
