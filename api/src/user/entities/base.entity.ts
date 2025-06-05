import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, MaxLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @ApiProperty({ description: '主键' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: '创建时间' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: '更新时间' })
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiProperty({ description: '备注', required: false })
  @IsOptional()
  @MaxLength(256)
  @Column({ length: 256, default: null })
  remarks: string;
}
