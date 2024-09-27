<template>
  <div>
    <h1>App</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@comp/HelloWorld.vue'

export default {
  name: 'App',

  components: {
    HelloWorld,
  },
}
</script>
