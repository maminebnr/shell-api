import { Test, TestingModule } from '@nestjs/testing';
import { ShellExecutionService } from './shell-execution.service';

describe('ShellExecutionService', () => {
  let service: ShellExecutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShellExecutionService],
    }).compile();

    service = module.get<ShellExecutionService>(ShellExecutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
