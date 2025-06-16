import { Body, ConflictException, Controller, HttpCode, HttpException, Post } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('/accounts')
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: any) {
    
    const { name, username, cpf, email, phone_number, password_hash } = body

    const userWithSameEmail = await this.prisma.user.findUnique({
        where:{
            email,
        },
    })

    if(userWithSameEmail) {
        throw new ConflictException
    }

    await this.prisma.user.create({
      data: {
        name,
        email,
        cpf,
        phone_number,
        username,
        password_hash,
      },
    })
  }
}
