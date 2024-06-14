import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
// import { GroupingByManagerIdAllUsers } from './user.model';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this.repository.create(user);
    return await this.repository.save(newUser);
  }

  async getAll() {
    try {
      return await this.repository.find();
    } catch (e) {
      Logger.error(e);
    }
  }

  async getUserById(id: number) {
    try {
      return await this.repository.findOne({ where: { id } });
    } catch (e) {
      Logger.error(e);
    }
  }

  async updateManagerId(userId: number, managerId: number) {
    try {
      await this.repository.update({ managerId: userId }, { managerId });
    } catch (e) {
      Logger.error(e);
    }
  }

  async deleteUserById(id: number) {
    try {
      return await this.repository.delete(id);
    } catch (e) {
      Logger.error(e);
    }
  }

  async changeManagerByUserId(id: number, managerId: number) {
    try {
      return await this.repository.update(id, { managerId });
    } catch (e) {
      Logger.error(e);
    }
  }

  async getAllFullNameAndId() {
    try {
      return this.repository.query(`
          SELECT CONCAT_WS(' ', "firstName", "lastName") AS name, id  FROM "user"
        `);
      // WHERE CONCAT_WS(' ', "firstName", "lastName") ILIKE '%J%'
    } catch (e) {
      Logger.error(e);
    }
  }

  async getAllFullNameAndIdWithoutOne(id: number) {
    try {
      return this.repository.query(`
          SELECT CONCAT_WS(' ', "firstName", "lastName") AS name, id  FROM "user"
          WHERE id != ${id}
        `);
      // WHERE CONCAT_WS(' ', "firstName", "lastName") ILIKE '%J%'
    } catch (e) {
      Logger.error(e);
    }
  }

  // async getAllWithSubordinates(): Promise<User[]> {
  //   try {
  //     return await this.repository.find({ relations: { subordinates: true } });
  //   } catch (e) {
  //     Logger.error(e);
  //   }
  // }

  // async getAllAndGroupByManagerId(): Promise<GroupingByManagerIdAllUsers[]> {
  //   try {
  //     return this.repository.query(`
  //       SELECT "managerId", (
  //         SELECT jsonb_agg(x) AS "users" FROM (
  //           SELECT *
  //           FROM "user" AS u
  //           WHERE u."managerId" = u_m."managerId"
  //           OR (u."managerId" IS NULL AND u_m."managerId" IS NULL)
  //         ) AS x
  //       )
  //       FROM "user" AS u_m
  //       GROUP BY "managerId"`);
  //   } catch (e) {
  //     Logger.error(e);
  //   }
  // }
}
