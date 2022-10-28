import { Module } from '@nestjs/common';
import { ChildService, TestServiceA } from './test.service';
import { TestController } from './test.controller';

@Module({
  controllers: [TestController],
  providers: [TestServiceA, ChildService],
  exports: [TestServiceA],
})
export class TestModule {}
