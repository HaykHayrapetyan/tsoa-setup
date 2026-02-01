import { User } from "../models/UserModel.js";

const users: User[] = [
  {
    id: 1,
    email: "jane@doe.com",
    name: "Jane Doe",
    status: "Happy",
    phoneNumbers: [],
  },
];

export class UsersRepository {
  public get(id: number): User | null {
    return users.find((user) => user.id === id) || null;
  }

  public create(user: Omit<User, "id">): User {
    const newUser = {
      id: users.length + 1,
      ...user,
    };
    users.push(newUser);
    return newUser;
  }
}
