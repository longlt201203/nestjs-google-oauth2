import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestJSGoogleOAuth2Module } from './nestjs-google-oauth2.module';

@Module({
  imports: [NestJSGoogleOAuth2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
