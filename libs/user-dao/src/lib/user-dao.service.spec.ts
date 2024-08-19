import { Test } from '@nestjs/testing';
import { UserDaoService } from './user-dao.service';

describe('UserDaoService', () => {
  let service: UserDaoService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [UserDaoService],
    }).compile();

    service = module.get(UserDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
