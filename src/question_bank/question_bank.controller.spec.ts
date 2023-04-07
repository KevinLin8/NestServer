import { Test, TestingModule } from '@nestjs/testing';
import { QuestionBankController } from './question_bank.controller';
import { QuestionBankService } from './question_bank.service';

describe('QuestionBankController', () => {
  let controller: QuestionBankController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestionBankController],
      providers: [QuestionBankService],
    }).compile();

    controller = module.get<QuestionBankController>(QuestionBankController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
