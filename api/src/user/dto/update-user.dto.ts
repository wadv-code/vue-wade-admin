import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @ApiProperty({ description: '用户昵称', required: false })
  name: string;

  @IsString()
  @ApiProperty({ example: '张三', description: '用户姓名' })
  username: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ description: '头像', required: false })
  avatar: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ description: '排序', required: false })
  seq: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ example: 18, description: '年龄', required: false })
  age: number;
}
