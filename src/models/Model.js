const isA = (value, Type) => {
  return value instanceof Type
    || (value.constructor && value.constructor === Type)
}

const cast = (value, Type) => {
  if (!isA(value, Type)) {
    return new Type(value)
  }
  return value
}

const getExpectedValues = (values, expected) => {
  const defined = {}
  Object.keys(expected)
    .forEach(key => {
      const type = expected[key]
      const value = values[key]
      const castedValue = cast(value, type)
      defined[key] = castedValue
    })
  return defined
}

function Model(fields) {
  return function (values) {
    const expectedValues = getExpectedValues(values, fields)
    Object.assign(this, expectedValues)
  }
}

export default Model
