function getTypeOfVariable<T>(target: T) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
}

export { getTypeOfVariable }
