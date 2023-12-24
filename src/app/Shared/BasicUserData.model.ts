
export class BasicUserData {
    constructor(
        public userID: string,
        public userName: string,
        public fullName: string,
        public profilePicture: string,
        public isFollowing?: boolean
    ) { }
}
