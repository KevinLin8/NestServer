import { Module } from '@nestjs/common';
import { QuestionBankService } from './question_bank.service';
import { QuestionBankController } from './question_bank.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { QuestionBank } from './entities/question_bank.entity'
@Module({
  imports:[TypeOrmModule.forFeature([QuestionBank])],
  controllers: [QuestionBankController],
  providers: [QuestionBankService]
})
export class QuestionBankModule {}
