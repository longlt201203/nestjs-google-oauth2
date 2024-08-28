import { Injectable } from '@nestjs/common';
import { NestJSGoogleOAuth2Service } from './nestjs-google-oauth2.service';

@Injectable()
export class AppService {
  constructor(
    private readonly testService: NestJSGoogleOAuth2Service
  ) {}

  getHello(): string {
    return "OK";
  }

  async testGetToken(code: string) {
    return code;
  }
}
