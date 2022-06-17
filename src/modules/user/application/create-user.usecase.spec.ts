import { Email } from '../domain/entities/email.vo';
import { Password } from '../domain/entities/password.vo';
import { Name } from '../domain/entities/user-name.vo';
import { User } from '../domain/entities/user.entity';
import { InMemoryUserRepository } from '../infraestructure/persistence/in-memory-user.repository';
import { CreateUserUseCase } from './create-user.usecase';

function createSUT() {
  const userRepository = new InMemoryUserRepository();
  const sut = new CreateUserUseCase(userRepository);
  return { sut, userRepository };
}

describe('CreateUser UseCase', () => {
  it('should create user', async () => {
    const { sut } = createSUT();

    const output = await sut.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: 'RuUxVT5yrJm%afhL',
    });

    expect(output).toBeDefined();
    expect(output).toStrictEqual({
      name: 'John Doe',
      email: 'john@doe.com',
    });
  });

  it('should create user with different data', async () => {
    const { sut } = createSUT();

    const output = await sut.execute({
      name: 'John Doe',
      email: 'john2@doe.com',
      password: 'RuUxVT5yrJm%afhL',
    });

    expect(output).toBeDefined();
    expect(output).toStrictEqual({
      name: 'John Doe',
      email: 'john2@doe.com',
    });
  });

  it("shouldn't create user with email already in use", async () => {
    const { sut, userRepository } = createSUT();
    const input = {
      name: 'John Doe',
      email: 'john@doe.com',
      password: 'RuUxVT5yrJm%afhL',
    };
    const name = Name.create(input.name);
    const email = Email.create(input.email);
    const password = Password.create(input.password);
    userRepository.users.push(User.create({ name, email, password }));

    await expect(sut.execute(input)).rejects.toThrow('Email already in use');
  });
});
