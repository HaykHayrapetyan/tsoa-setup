import { UsersRepository } from '../repositories/UserRepository.js';
import { User } from '../models/UserModel.js';
import { NotFoundError } from '../errors/errors.js';

// A post request should not contain an id.
export type UserCreationParams = Omit<User, 'id'>

export class UsersService {
  private repository: UsersRepository;

  constructor() {
    this.repository = new UsersRepository();
  }

  public get(id: number): User {
    const user = this.repository.get(id);
    if (!user) {
      throw new NotFoundError(`User ${id} not found`);
    }
    return user;
  }

  public create(user: UserCreationParams): User {
    return this.repository.create(user);
  }
}
