import { EntityId } from './entity-id';

export class Entity<T> {
  protected readonly _id: EntityId;
  public readonly props: T;

  get id(): string {
    return this._id.id;
  }

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = new EntityId(id);
  }
}
