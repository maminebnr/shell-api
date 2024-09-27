import { Test, TestingModule } from '@nestjs/testing';
import { ShellExecutionController } from './shell-execution.controller';

describe('ShellExecutionController', () => {
  let controller: ShellExecutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShellExecutionController],
    }).compile();

    controller = module.get<ShellExecutionController>(ShellExecutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
