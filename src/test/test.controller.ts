import { Controller, Get } from '@nestjs/common';
import { ChildService, TestServiceA } from './test.service';

@Controller('test')
export class TestController {
  constructor(
    private readonly childService: ChildService,
    private readonly testService: TestServiceA,
  ) {}

  @Get('propertyBase')
  propertyBaseTest(): string {
    return this.childService.testHello();
  }

  @Get()
  test(): string {
    return this.testService.testHello();
  }
}
