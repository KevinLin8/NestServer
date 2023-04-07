import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn} from 'typeorm'
import { QuestionType,StateType } from '../../ults/enum'
@Entity()
export class QuestionBank {
   //自增列
   @PrimaryGeneratedColumn()
   id:number
   @Column({ type: "enum",enum:QuestionType,default:QuestionType.UNKNOWN,comment:'问题类型'})
   question_type:number
   @Column({type:"varchar",length:200,comment:'问题标题'})
   title:string
   @Column({type:"varchar",length:1024,comment:'问题内容'})
   problem:string
   @Column({type:"varchar",length:1024,comment:'问题答案'})
   answer:string
   @CreateDateColumn({ name: 'create_time', type: 'timestamp',comment:'创建时间'})
   create_time:Date
   @UpdateDateColumn({ name: 'update_time', type: 'timestamp',comment:'修改时间'})
   update_time:Date
   @Column({ type: "enum",enum:StateType,default:StateType.NORMAL,comment:'数据状态'})
   state:number
   @Column("simple-json")
   other_answers:OtherAnswers[]
}
