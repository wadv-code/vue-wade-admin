import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum UserSex {
  NULL = 0,
  MAN = 1,
  WOMAN = 2,
}

@Entity()
export class User extends BaseEntity {
  @ApiProperty({ example: 'admin', description: '账户' })
  @Column()
  username: string;

  @ApiProperty({ description: '用户昵称', required: false })
  @Column({ default: '' })
  name: string;

  @ApiProperty({
    description: '用户密码',
    example: 'e10adc3949ba59abbe56e057f20f883e',
  })
  @Column({ default: 'e10adc3949ba59abbe56e057f20f883e' })
  password: string;

  @ApiProperty({ description: '性别', required: false })
  @Column({
    type: 'enum',
    enum: UserSex,
    default: UserSex.NULL,
  })
  sex: UserSex;

  @ApiProperty({ description: '排序', required: false })
  @Column({ default: 0 })
  seq: number;

  @ApiProperty({
    example: 18,
    description: '年龄',
    nullable: true,
    required: false,
  })
  @Column({ default: null })
  age: number;

  @ApiProperty({ description: '头像', required: false })
  @Column({ default: null })
  avatar: string;

  @ApiProperty({ description: '邮箱', required: false })
  @Column({ default: null })
  email: string;
}
