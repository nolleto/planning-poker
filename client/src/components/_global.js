import Vue from 'vue'
import components from '@/components'

for (const componentName of Object.keys(components)) {
  const component = components[componentName]

  Vue.component(componentName, component.default || component)
}
