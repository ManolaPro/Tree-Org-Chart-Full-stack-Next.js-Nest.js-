import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  managerId?: number;

  @ManyToOne(() => User, (user) => user.subordinates)
  @JoinColumn({ name: 'managerId' })
  manager?: User;

  @OneToMany(() => User, (user) => user.manager)
  subordinates?: User[];
}
