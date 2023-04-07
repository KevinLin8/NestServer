import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpFilter } from './common/filter';//引入异常拦截器
import { Request,Response,NextFunction } from 'express';//引入中间件的类型文件
import * as cors from 'cors';//引入解决跨域问题中间件
// 创建全局中间件
function MiddlewareAll(req: Request, res: Response, next:NextFunction){
//   console.log('全局中间件的req数据:',req);
//   console.log('全局中间件的res数据:',res);
  if(req.method == "POST"){
    res.send({
        message:'你问过我老大了吗，就创建！',
    })
    }
    else{
        next()
    }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
//   app.use(MiddlewareAll)//使用全局中间件
  app.use(cors())//使用解决跨域问题中间件
  app.useGlobalFilters(new HttpFilter())//使用异常拦截器

  await app.listen(3000);
}
bootstrap();
