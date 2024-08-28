import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("test-login-google")
  testLoginGoogle(@Query("code") code: string) {
    this.appService.testGetToken(code);
    return "OK";
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
