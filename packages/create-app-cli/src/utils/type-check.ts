export function isObject<T>(data: T) {
  return Object.prototype.toString.call(data) === '[object Object]';
}

export function isString<T>(data: T) {
  return typeof data === 'string';
}

export function isNumber<T>(data: T) {
  return typeof data === 'number';
}
