import { Module, OnModuleInit } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { Neo4jService } from 'nest-neo4j/dist';

@Module({
  controllers: [AuthorsController],
  providers: [AuthorsService],
})
export class AuthorsModule implements OnModuleInit {
  constructor(private readonly neo4jService: Neo4jService) {}

  // 模块初始化时建立数据库索引
  async onModuleInit() {
    await this.neo4jService
      .write(`CREATE CONSTRAINT ON (author:Author) ASSERT author.id IS UNIQUE`)
      .catch((e) => {
        console.log(e);
      });
  }
}
