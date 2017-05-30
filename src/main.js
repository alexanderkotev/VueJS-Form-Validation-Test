// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate);
Vue.config.productionTip = false

/* eslint-disable no-new */

const dictionary = {
	en: {
    	messages: {
      		regex: "Your password must contain at least 1 lowercase letter and a number",
      		confirmed: "Passwords do not match"
    	}
	}
};

const multiple = {
  required: true,
  numeric: true,
  email: true
};
    
VeeValidate.Validator.updateDictionary(dictionary);
Vue.use(VeeValidate);
Vue.config.debug = true;


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
