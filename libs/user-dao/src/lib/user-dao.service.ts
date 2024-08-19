import { Injectable } from '@nestjs/common'
import {Prisma} from '.prisma/schema-webapi/client/webapi'
import { UserModel } from '@user-list/prisma-schema/models'
import { PgsqlClientService } from '@user-list/pgsql-client'

@Injectable()
export class UserDaoService {

  constructor(
    private dbClient: PgsqlClientService
  ) {}

  getAll = async () => {
    try {
      
      const result = await this.dbClient.user.findMany()      

      return {
        success: true,
        data: result
      }

    } catch(error) {
      
      return {
        success: false,
        message: error
      }

    }
  }

  getById = async ( id: number ) => {
    return await this.dbClient.user.findUnique({
      where: { id }
    })
  }

  createUser = async (data: Prisma.userCreateInput) => {
    try {
      const result = await this.dbClient.user.create({data: data})
      return ({
        success: true,
        message: "Customer created successfully...",
        result
      })
    } catch( err ) {
      return {
        success: false,
        message: err
      }
    }
  }

  deleteUser = async (id: number) => {
    try {
      const result = this.dbClient.user.delete({
        where: { id }
      })
      return ({
        success: true,
        message: "Customer deleted successfully...",
        result
      })
    } catch(error) {
      return ({
        success: false,
        message: "Unsuccessfull delete...",
      })
    }
  }

  updateUser = async ( id: number, data: Prisma.userUpdateInput ) => {

    console.log('Type of ID:', typeof(id))
      const result = await this.dbClient.user.update({
        where: { id },
        data
      })

    }

}
