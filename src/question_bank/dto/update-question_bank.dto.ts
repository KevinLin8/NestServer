import { PartialType } from '@nestjs/mapped-types';
import { CreateQuestionBankDto } from './create-question_bank.dto';

export class UpdateQuestionBankDto extends PartialType(CreateQuestionBankDto) {
        question_type:number;
        title:string;
        problem:string;
        answer:string;
        state:number;
        other_answers:OtherAnswers[]
}
