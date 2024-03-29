import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>;
  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string) {

    const usersExist = await this.usersRepository.findOne({
      email,
    });

    if (usersExist) {
      return usersExist;
    }

    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);

    return user;
  }
}
export { UsersService };
  