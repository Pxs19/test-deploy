import { Injectable } from '@nestjs/common';
import { TestRepository } from './libs/repository/test-repo/test.repository';

@Injectable()
export class AppService {
  constructor(private readonly testrepo: TestRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  createMock() {
    return this.testrepo.createMock();
  }

  getMock() {
    return this.testrepo.getMock();
  
  }
}
