/* eslint-disable */
import { PublicClientApplication, } from '@azure/msal-browser';
import { MSAL_CONFIG } from './azure-authentication-config';
export class AzureAuthenticationContext {
    constructor() {
        var _a;
        this.myMSALObj = new PublicClientApplication(MSAL_CONFIG);
        this.isAuthenticationConfigured = false;
        // @ts-ignore
        this.account = null;
        this.setRequestObjects();
        if ((_a = MSAL_CONFIG === null || MSAL_CONFIG === void 0 ? void 0 : MSAL_CONFIG.auth) === null || _a === void 0 ? void 0 : _a.clientId) {
            this.isAuthenticationConfigured = true;
        }
    }
    setRequestObjects() {
        this.loginRequest = {
            scopes: [],
            prompt: 'select_account',
        };
        this.loginRedirectRequest = Object.assign(Object.assign({}, this.loginRequest), { redirectStartPage: window.location.href });
    }
    login(signInType, setUser) {
        if (signInType === 'loginPopup') {
            this.myMSALObj
                .loginPopup(this.loginRequest)
                .then((resp) => {
                this.handleResponse(resp, setUser);
            })
                .catch((err) => {
                console.error(err);
            });
        }
        else if (signInType === 'loginRedirect') {
            this.myMSALObj.loginRedirect(this.loginRedirectRequest);
        }
    }
    logout(account) {
        const logOutRequest = {
            account,
        };
        this.myMSALObj.logout(logOutRequest);
    }
    handleResponse(response, incomingFunction) {
        if (response !== null) {
            this.account = response.account;
        }
        else {
            this.account = this.getAccount();
        }
        if (this.account) {
            incomingFunction(this.account);
        }
    }
    getAccount() {
        console.log(`loadAuthModule`);
        const currentAccounts = this.myMSALObj.getAllAccounts();
        if (currentAccounts === null) {
            // @ts-ignore
            console.log('No accounts detected');
            return undefined;
        }
        if (currentAccounts.length > 1) {
            // TBD: Add choose account code here
            // @ts-ignore
            console.log('Multiple accounts detected, need to add choose account code.');
            return currentAccounts[0];
        }
        else if (currentAccounts.length === 1) {
            return currentAccounts[0];
        }
    }
}
export default AzureAuthenticationContext;