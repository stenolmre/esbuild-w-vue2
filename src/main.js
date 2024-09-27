import './main.scss'

import Vue from 'vue'
import App from './App.vue'

function run() {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}

run()
