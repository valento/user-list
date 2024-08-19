import { Module } from '@nestjs/common';
import { UserDaoController } from './user-dao.controller';
import { UserDaoService } from './user-dao.service';
import { PgsqlClientModule } from '@user-list/pgsql-client';

@Module({
  imports: [
    PgsqlClientModule
  ],
  controllers: [UserDaoController],
  providers: [UserDaoService],
  exports: [UserDaoService],
})
export class UserDaoModule {}
