export const getFromModule = moduleName => func => state => func(state[moduleName])
