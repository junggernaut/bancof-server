import { Inject, Injectable } from '@nestjs/common';

// propertyBase.testServiceA.ts
@Injectable()
export class TestServiceA {
  testint: number;

  constructor() {
    this.testint = 0;
  }

  testHello() {
    this.testint += 1;
    return `hello Test A: ${this.testint}`;
  }
}

export class ParentService {
  // constructor(private readonly testServiceA: TestServiceA) {}
  constructor(
    @Inject(TestServiceA) private readonly testServiceA: TestServiceA,
  ) {}

  testHello(): string {
    return 'hello world';
  }

  parentTest(): string {
    return this.testServiceA.testHello();
  }
}

// // propertyBase.childService.ts
@Injectable()
export class ChildService extends ParentService {
  // constructor(private readonly serviceA: TestServiceA) {
  //   super(serviceA);
  // }
  testHello(): string {
    return this.parentTest();
  }
}
