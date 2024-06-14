import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(user: Partial<User>) {
    return await this.userRepository.createUser(user);
  }

  async deleteUserById(id: number) {
    const user = await this.userRepository.getUserById(id);
    if (!user) {
      throw new NotFoundException('User is not found');
    }
    await this.userRepository.updateManagerId(id, user.managerId);
    await this.userRepository.deleteUserById(id);
  }

  async changeManagerByUserId(id: number, managerId: number) {
    const [user, manager] = await Promise.all([
      this.userRepository.getUserById(id),
      this.userRepository.getUserById(managerId),
    ]);
    if (!user || !manager) {
      const entity = !user ? 'User' : 'Manager';
      const idError = !user ? id : managerId;
      throw new NotFoundException(
        `${entity} with id: ${idError} is not found.`,
      );
    }
    return await this.userRepository.changeManagerByUserId(id, managerId);
  }

  async getAll() {
    const tree = [];
    const map = {};
    const allUsers = await this.userRepository.getAll();
    for (const user of allUsers) {
      map[user.id] = { ...user, subordinates: [] };
    }
    for (const user of allUsers) {
      if (user.managerId === null) {
        tree.push(map[user.id]);
      } else {
        if (map[user.managerId]) {
          map[user.managerId].subordinates.push(map[user.id]);
        }
      }
    }
    return tree;
  }

  async getUserInfo(id: number) {
    const [userInfo, managers] = await Promise.all([
      this.userRepository.getUserById(id),
      this.userRepository.getAllFullNameAndIdWithoutOne(id),
    ]);
    if (!userInfo) {
      throw new NotFoundException(`User with id: ${id} is not found`);
    }
    return {
      userInfo,
      managers,
    };
  }

  async getManagers() {
    return this.userRepository.getAllFullNameAndId();
  }
}
