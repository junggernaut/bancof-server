import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TestServiceA } from './test/test.service';

@Controller()
export default class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly testService: TestServiceA,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  getHello2(@Body('name') name: string, @Body('hash') hash: string): string {
    console.log(name, hash);
    return this.appService.getHello();
  }

  @Get('/apptest')
  getHello3(): string {
    return this.testService.testHello();
  }
}
