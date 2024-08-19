import { Module } from '@nestjs/common';
import { PgsqlClientService } from './pgsql-client.service';

@Module({
  providers: [PgsqlClientService],
  exports: [PgsqlClientService],
})
export class PgsqlClientModule {}
