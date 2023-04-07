import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { QuestionBankService } from './question_bank.service';
import { CreateQuestionBankDto } from './dto/create-question_bank.dto';
import { UpdateQuestionBankDto } from './dto/update-question_bank.dto';

@Controller('question_bank')
export class QuestionBankController {
  constructor(private readonly questionBankService: QuestionBankService) {}
  @Post()
  create(@Body() createQuestionBankDto: CreateQuestionBankDto) {
      return this.questionBankService.create(createQuestionBankDto);
  } 

  @Get()
  findAll(@Query() selectobj?:SelectObj) {
    if(!Object.keys(selectobj).length){
        return this.questionBankService.findAll();
    }
    return this.questionBankService.findOne(selectobj);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionBankService.findOne({id});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionBankDto: UpdateQuestionBankDto) {
    console.log(id,updateQuestionBankDto);
    
    return this.questionBankService.update(+id, updateQuestionBankDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionBankService.remove(+id);
  }
}
