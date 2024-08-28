import { Injectable } from "@nestjs/common";
import { GetOAuth2URIParams, GetTokenInfoParams, GetTokenParams, GetTokenResponse } from "./types";
import { HttpService } from "@nestjs/axios";
import { catchError, firstValueFrom } from "rxjs";

@Injectable()
export class NestJSGoogleOAuth2Service {
    private static readonly GOOGLE_OAUTH2_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";
    private static readonly GOOGLE_TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
    private static readonly GOOGLE_TOKEN_INFO_ENDPOINT = "https://oauth2.googleapis.com/tokeninfo";

    constructor(
        private readonly httpService: HttpService
    ) {}
    
    getOAuth2URI(params: GetOAuth2URIParams) {
        const uri = new URL(NestJSGoogleOAuth2Service.GOOGLE_OAUTH2_ENDPOINT);
        Object.entries(params).forEach(([key, val]) => {
            if (val != undefined || val != null) {
                uri.searchParams.set(key, val);
            }
        })
        return uri.toString();
    }

    async getToken(params: GetTokenParams) {
        const uri = new URL(NestJSGoogleOAuth2Service.GOOGLE_TOKEN_ENDPOINT);
        const response = await firstValueFrom(
            this.httpService
                .post<GetTokenResponse>(uri.toString(), params)
                .pipe(
                    catchError((err) => {
                        throw err;
                    })
                )
        );
        return response.data;
    }

    async getTokenInfo(params: GetTokenInfoParams) {
        const uri = new URL(NestJSGoogleOAuth2Service.GOOGLE_TOKEN_INFO_ENDPOINT);
        uri.searchParams.set("id_token", params.id_token);
        const response = await firstValueFrom(
            this.httpService
                .get(uri.toString())
                .pipe(
                    catchError((err) => {
                        throw err;
                    })
                )
        );
        return response.data;
    }
}