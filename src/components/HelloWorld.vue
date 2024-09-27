<template lang="pug">
div
  h2 {{ HELLO }}
  AB
  BA
</template>

<script>
import { HELLO } from '@root/constants'

import AB from '@comp/etc/AB.vue'
import BA from '@comp/etc/BA.vue'

export default {
  name: 'HelloWorld',

  components: {
    AB,
    BA,
  },

  data() {
    return {
      HELLO,
    }
  },
}
</script>
