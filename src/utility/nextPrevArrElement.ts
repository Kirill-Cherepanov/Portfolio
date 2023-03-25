export function nextArrElement<T>(arr: T[], el: T) {
  return arr[arr.indexOf(el) + 1 >= arr.length ? 0 : arr.indexOf(el) + 1];
}

export function prevArrElement<T>(arr: T[], el: T) {
  return arr[arr.indexOf(el) - 1 < 0 ? arr.length - 1 : arr.indexOf(el) - 1];
}
