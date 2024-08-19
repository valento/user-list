import { Module } from '@nestjs/common';
import { UserDaoController } from './user-dao.controller';
import { UserDaoService } from './user-dao.service';

@Module({
  controllers: [UserDaoController],
  providers: [UserDaoService],
  exports: [UserDaoService],
})
export class UserDaoModule {}
