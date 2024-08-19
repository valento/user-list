import { Test } from '@nestjs/testing';
import { PgsqlClientService } from './pgsql-client.service';

describe('PgsqlClientService', () => {
  let service: PgsqlClientService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PgsqlClientService],
    }).compile();

    service = module.get(PgsqlClientService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
