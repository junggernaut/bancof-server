import { Module } from '@nestjs/common';
import { ChildService, TestServiceA } from './test.service';
import { TestController } from './test.controller';

@Module({
  controllers: [TestController],
  providers: [ChildService, TestServiceA],
  exports: [TestServiceA],
})
export class TestModule {}
