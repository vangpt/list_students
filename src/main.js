import Vue from 'vue'
import App from './App.vue'
import './plugins';

new Vue({
  el: '#app',
  render: h => h(App)
})


// Mỗi thành phần trong Web tương ứng mỗi Component -> Tương ứng với 1 file *.vue