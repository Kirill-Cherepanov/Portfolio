export function objectEntriesTyped<T extends object>(obj: T) {
  return Object.entries(obj) as [keyof T, typeof obj[keyof T]][];
}

export function objectKeysTyped<T extends object>(obj: T) {
  return Object.keys(obj) as (keyof T)[];
}
