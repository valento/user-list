import { Module } from '@nestjs/common'

// import { AppController } from './app.controller'
// import { AppService } from './app.service'

import { UserDaoModule } from '@user-list/user-dao';


@Module({
  imports: [UserDaoModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
