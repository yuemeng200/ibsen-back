import { Inject, Injectable, Scope } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { REQUEST } from '@nestjs/core';
import { Neo4jService } from 'nest-neo4j/dist';
import { Request } from 'express';

type authorsResponse = {
  count: number;
  authors: Record<string, any>[];
};

@Injectable({ scope: Scope.REQUEST })
export class AuthorsService {
  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private readonly neo4jService: Neo4jService,
  ) {}

  create(createAuthorDto: CreateAuthorDto) {
    return 'This action adds a new author';
  }

  findAll(): Promise<authorsResponse> {
    return this.neo4jService
      .read(`MATCH (author:Author) RETURN author`)
      .then((res) => {
        const { records } = res;
        return {
          count: records.length,
          authors: records,
        };
      });
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
