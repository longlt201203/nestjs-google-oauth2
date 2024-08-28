export interface GetOAuth2URIParams {
    client_id: string;
    redirect_uri: string;
    response_type: "code";
    scope: string;
    access_type?: "online" | "offline";
    state?: string;
    include_granted_scopes?: boolean;
    enable_granular_consent?: boolean;
    login_hint?: string;
    prompt?: "none" | "consent" | "select_account";
}