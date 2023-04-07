import { Injectable } from '@nestjs/common';
import { CreateQuestionBankDto } from './dto/create-question_bank.dto';
import { UpdateQuestionBankDto } from './dto/update-question_bank.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,Like} from 'typeorm';
import { QuestionBank } from './entities/question_bank.entity';
import { ErrorCode } from '../ults/globalerror'
import { removeEmptyProps } from '../ults'
@Injectable()
export class QuestionBankService {
  constructor(@InjectRepository(QuestionBank) private readonly QuestionBank:Repository<QuestionBank>){}
  async create(createQuestionBankDto: CreateQuestionBankDto) {
    const questionBankdata = new QuestionBank();
    questionBankdata.title = createQuestionBankDto.title
    questionBankdata.question_type = createQuestionBankDto.question_type
    questionBankdata.problem = createQuestionBankDto.problem
    questionBankdata.answer = createQuestionBankDto.answer
    questionBankdata.other_answers = createQuestionBankDto.other_answers

    try{
        const result = await this.QuestionBank.save(questionBankdata);
        return {
            errcode:0,
            message:'创建成功',
            data:result
        }
    }catch(error){
        return {
            errcode:ErrorCode['NEST_SQL_EXECUTE_ERROR'],
            message:'NEST_SQL_EXECUTE_ERROR',
        }
    }
  }

  async findAll() {
    try{
        const result = await this.QuestionBank.find();
        return {
            errcode:0,
            message:'查询成功',
            data:result
        }
    }catch(error){
            console.log(error);
            
        return {
            errcode:ErrorCode['NEST_SQL_EXECUTE_ERROR'],
            message:'NEST_SQL_EXECUTE_ERROR',
        }
    }
  }

  async findOne(selectobj:SelectObj) {
    try{
      selectobj=  removeEmptyProps(selectobj)
      selectobj.title ? selectobj.title = Like(`%${selectobj.title}%`) : null
      selectobj.id ? selectobj.id = Number(selectobj.id) : null
      let result = await this.QuestionBank.find({
            where:selectobj
        });
    return {
            errcode:0,
            message:'查询成功',
            data:result
        }
    }catch(error){
        return {
            errcode:ErrorCode['NEST_SQL_EXECUTE_ERROR'],
            message:'NEST_SQL_EXECUTE_ERROR',
        }
    } 
  }

  async update(id: number, updateQuestionBankDto: UpdateQuestionBankDto) {
    try{
        const result = await this.QuestionBank.update(id, {
            question_type:updateQuestionBankDto.question_type,
            title:updateQuestionBankDto.title,
            problem:updateQuestionBankDto.problem,
            answer:updateQuestionBankDto.answer,
            state:updateQuestionBankDto.state,
            other_answers:updateQuestionBankDto.other_answers
        });
        return {
            errcode:0,
            message:'修改成功',
            data:result
        }
    }catch(error){
        return {
            errcode:ErrorCode['NEST_SQL_EXECUTE_ERROR'],
            message:'NEST_SQL_EXECUTE_ERROR',
        }
    }
  }

  async remove(id: number) {
        try{
        const result = await this.QuestionBank.delete(id);
        return {
            errcode:0,
            message:'删除成功',
            data:result
        }
    }catch(error){
        return {
            errcode:ErrorCode['NEST_SQL_EXECUTE_ERROR'],
            message:'NEST_SQL_EXECUTE_ERROR',
        }
    }

  }
}
