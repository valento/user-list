import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserDaoService } from './user-dao.service';
import {Prisma} from '.prisma/schema-webapi/client/webapi'
import { UserModel } from '@user-list/prisma-schema/models';

@Controller('user')
export class UserDaoController {
  constructor(private service: UserDaoService) {}

  @Get()
  async getAll() {
    return await this.service.getAll()
  }

  @Get('/:id')
  async getOneById(
    @Param('id') id: string
  ) {
    return await this.service.getById(Number(id))
  }

  @Post('create')
  async createUser(
    @Body() body: Prisma.userCreateInput//UserModel.CreateUser
  ) {
    return await this.service.createUser(body)
  }

  // @Put('user')
  // async updateUser(
  //   @Param('id')
  // )

  @Delete('delete/:id')
  async deleteUser(
    @Param('id') id: string
  ) {
    return await this.service.deleteUser(Number(id))
  }
}


