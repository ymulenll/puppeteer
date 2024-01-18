export function strongWeakRef<T extends object>(
  object: T,
  message: string
): () => T {
  const ref = new WeakRef(object);
  return new Proxy(
    () => {
      return ref;
    },
    {
      apply(target) {
        const object = target().deref();
        if (object === undefined) {
          throw new Error(message);
        }
        return object;
      },
    }
  ) as () => T;
}
