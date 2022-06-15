export default function isObject<T>(data: T) {
  return Object.prototype.toString.call(data) === '[object Object]';
}
