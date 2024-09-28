import './main.scss'

import Vue from 'vue'
import App from './App.vue'

// to test out the "minify templates" plugin
export const html = `
  <div id="app">
    <p>Vue app</p>
    <span>Template</span>
  </div>
`

function run() {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}

run()
