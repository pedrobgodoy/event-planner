export class Name {
  private constructor(public readonly value: string) {}

  public static create(value: string): Name {
    if (value.length < 3) {
      throw new Error('Name must be at least 3 characters');
    }
    if (!value.match(/^[a-zA-Z ]+$/)) {
      throw new Error('Name must be alphanumeric');
    }
    if (value.length > 30) {
      throw new Error('Name must be less or equal to 30 characters');
    }

    return new Name(value);
  }
}
