import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  getHello2(@Body('name') name: string, @Body('hash') hash: string): string {
    console.log(name, hash);
    return this.appService.getHello();
  }
}
