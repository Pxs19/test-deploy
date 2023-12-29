import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class TestRepository {
  constructor(@Inject(PrismaService) readonly prisma: PrismaService) {}

  async createMock() {
    const result = await this.prisma.user.create({
      data: {
        email: 'test',
        name: 'test',
      },
    });

    return result;
  }

  async getMock() {
    return await this.prisma.user.findMany({})
  
  }
}
