import { IsInt } from 'class-validator';

export class ChangeManagerDto {
  @IsInt()
  managerId: number;
}
