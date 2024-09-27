<template lang="pug">
div#ab(:class="styles.active") AB |&nbsp;
  em lightpink
</template>

<script>
import styles from './a.module.css'

export default {
  name: 'AB',

  data() {
    return {
      styles,
    }
  },
}
</script>
