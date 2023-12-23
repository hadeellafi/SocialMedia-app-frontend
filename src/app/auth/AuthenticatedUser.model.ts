
export class AuthenticatedUser {
    constructor(
        public id: string,
        public username: string,
        public profilePicture: string,
        public fullName: string,
        private _token: string|null,
        private tokenExpirationDate: Date

    ) { }
    get token() {
        //check if we dont have date or the token expired so it is exist but we cant use it couse it expired
        if (!this.tokenExpirationDate || new Date() > this.tokenExpirationDate)
            return null;
        return this._token
    }

}
