const requireModule = require.context('.', true, /\.js$/)
const filterRgx = /\.\/\w*\/index.js$/g
const replaceRgx = /(\.\/|\/index.js)/g
const modules = {}

requireModule.keys()
  .filter(w => filterRgx.test(w))
  .forEach(fileName => {
    const moduleName = fileName.replace(
      replaceRgx, ''
    )

    if (moduleName === 'common') return

    modules[moduleName] = requireModule(fileName).default
  })

export default modules
