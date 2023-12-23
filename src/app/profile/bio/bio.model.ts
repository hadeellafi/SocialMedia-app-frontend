export interface BioData {
    id: string;
    username: string;
    fullName: string;
    profilePicture: string;
    description?: string;
    isFollowing?: boolean;
    followingCount: number;
    followersCount: number;
    postsCount: number;
}