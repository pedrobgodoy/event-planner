import { v4 as uuid } from 'uuid';

export class EntityId {
  private readonly _id: string;

  get id(): string {
    return this._id;
  }

  constructor(id?: string) {
    this._id = id || uuid();
  }
}
