import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repository/user.repository';

export class InMemoryUserRepository implements UserRepository {
  users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }

  async getByEmail(email: string): Promise<User | undefined> {
    return this.users.find((u) => u.email === email);
  }
}
