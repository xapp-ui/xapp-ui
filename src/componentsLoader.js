import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default function(Vue) {

  const requireComponent = require.context('./components', true, /\.(vue|js)$/i)

  requireComponent.keys().forEach(fileName => {
  
    const componentConfig = requireComponent(fileName)



    const folderName = fileName.split('/')[1];
    const mainFileName = fileName.split('/')[2].replace(/^\.\//,'').replace(/\.\w+$/, '');
    
    let componentName = upperFirst(camelCase(mainFileName));

    if (folderName !== mainFileName)
    {
      componentName = upperFirst(
        camelCase(fileName.replace(/^\.\//,'').replace(/\.\w+$/, ''))
      ) 
    }

    // console.log(componentName + ' registered');
    Vue.component(componentName, componentConfig.default || componentConfig)

  })
}

