import { Controller, Get } from '@nestjs/common';
import { UserDaoService } from './user-dao.service';

@Controller('user')
export class UserDaoController {
  constructor(private userDaoService: UserDaoService) {}

  @Get()
  getData() {
    return {
      message: 'Helo User!'
    };
  }
}


