
import componentsLoader from './componentsLoader'
import './assets/css/xapp.css'

export default {

    install: function(Vue) {
      // register the components globally
      componentsLoader(Vue);
    }
}
