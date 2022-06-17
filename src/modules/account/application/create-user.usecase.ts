import { Email } from '../domain/entities/email.vo';
import { Password } from '../domain/entities/password.vo';
import { Name } from '../domain/entities/user-name.vo';
import { User } from '../domain/entities/user.entity';
import { UserRepository } from '../domain/repository/user.repository';

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};

type CreateUserOutput = {
  name: string;
  email: string;
};

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = User.create({
      email: Email.create(input.email),
      name: Name.create(input.name),
      password: Password.create(input.password),
    });
    const userWithEmail = await this.userRepository.getByEmail(input.email);
    if (userWithEmail) throw new Error('Email already in use');
    await this.userRepository.create(user);
    return {
      name: input.name,
      email: input.email,
    };
  }
}
