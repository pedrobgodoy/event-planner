import * as bcrypt from 'bcrypt';

export class Password {
  private value?: string;
  private _hash?: string;

  get hash(): string {
    return this._hash || this.hashPassword();
  }

  private constructor({ value, hash }: { value?: string; hash?: string }) {
    this.value = value;
    this._hash = hash || this.hashPassword();
  }

  public static create(value: string): Password {
    if (value.length < 6) {
      throw new Error('Password must be at least 6 characters');
    }
    if (!value.match(/\d/)) {
      throw new Error('Password must contain at least one number');
    }
    if (!value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/)) {
      throw new Error('Password must contain at least one symbol');
    }
    if (!value.match(/[A-Z]/)) {
      throw new Error('Password must contain at least one upper case character');
    }
    if (!value.match(/[a-z]/)) {
      throw new Error('Password must contain at least one lower case character');
    }
    return new Password({ value });
  }

  public static createFromHash(hash: string): Password {
    return new Password({ hash });
  }

  private hashPassword(): string {
    return bcrypt.hashSync(this.value || '', 10);
  }
}
