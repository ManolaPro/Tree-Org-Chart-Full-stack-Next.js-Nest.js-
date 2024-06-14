import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ChangeManagerDto } from './dtos/change-manager.dto';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() user: CreateUserDto): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async deleteUserById(@Param('id', ParseIntPipe) id: number) {
    await this.userService.deleteUserById(id);
    return { message: `User with id ${id} deleted successfully` };
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async changeManagerByUserId(
    @Param('id', ParseIntPipe) id: number,
    @Body() { managerId }: ChangeManagerDto,
  ) {
    await this.userService.changeManagerByUserId(id, managerId);
    return {
      message: `A user with id: ${id} is assigned a manager with id: ${managerId}`,
    };
  }

  @Get('manager')
  async getManagers() {
    return await this.userService.getManagers();
  }

  @UsePipes(new ValidationPipe())
  @Get(':id')
  async getUserInfo(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.getUserInfo(id);
  }
}
