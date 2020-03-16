import Vue from 'vue'
import App from './App.vue'
import BootstrapModal from './components/BootstrapModal.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
window.$ = window.jQuery = require('jquery')

Vue.config.productionTip = false

Vue.component("bootstrap-modal", BootstrapModal)

new Vue({
	render: h => h(App)
}).$mount('#app')
