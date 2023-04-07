export class CreateQuestionBankDto {
    title:string;
    question_type:number;
    problem:string;
    answer:string;
    other_answers:OtherAnswers[]
}
