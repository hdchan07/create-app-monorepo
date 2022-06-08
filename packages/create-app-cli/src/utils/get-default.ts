interface DefaultData <T>{
  default?: T;
}

export default function getDefault<T>(fn: T) {
  return (fn as DefaultData<T>).default || fn;
}
