export abstract class IRepository<T> {
  abstract save(model: T): Promise<void>
}
