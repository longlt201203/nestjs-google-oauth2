export interface GetTokenParams {
    client_id: string;
    client_secret: string;
    code: string;
    redirect_uri: string;
    grant_type: "authorization_code";
}