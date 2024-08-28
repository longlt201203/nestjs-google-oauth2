import { Module } from "@nestjs/common";
import { NestJSGoogleOAuth2Service } from "./nestjs-google-oauth2.service";
import { HttpModule } from "@nestjs/axios";

@Module({
    providers: [NestJSGoogleOAuth2Service],
    exports: [NestJSGoogleOAuth2Service],
    imports: [HttpModule]
})
export class NestJSGoogleOAuth2Module {}