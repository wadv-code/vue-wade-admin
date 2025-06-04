import { Crud, type CrudController } from '@dataui/crud';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
// biome-ignore lint/style/useImportType: <explanation>
import { UserService } from './user.service';

@Crud({
  model: {
    type: User,
  },
  dto: {
    create: UpdateUserDto,
    update: UpdateUserDto,
  },
  query: {
    alwaysPaginate: true,
    limit: 10,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
})
@ApiTags('用户管理')
@Controller('user')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
