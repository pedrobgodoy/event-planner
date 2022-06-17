import { Entity } from '../../../../shared/domain/entity/entity';
import { Email } from './email.vo';
import { Password } from './password.vo';
import { Name } from './user-name.vo';

type UserProps = {
  name: Name;
  email: Email;
  password: Password;
};

export class User extends Entity<UserProps> {
  get id(): string {
    return this._id.id;
  }

  get name(): string {
    return this.props.name.value;
  }

  get email(): string {
    return this.props.email.value;
  }

  get hashedPassword(): string {
    return this.props.password.hash;
  }

  private constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  static create(props: UserProps, id?: string): User {
    return new User(props, id);
  }
}
