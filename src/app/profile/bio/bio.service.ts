import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { AuthService } from '../../auth/auth.service';

import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { BioData } from "./bio.model";
@Injectable({ providedIn: 'root' })

export class BioService {


    constructor(private authService: AuthService, private http: HttpClient) { }


    fetchData(currentUserId: string, userId: string) {
        const url = `https://localhost:7216/api/Users/ProfileBio?currentUserId=${currentUserId}&userId=${userId}`;
        return this.http.get<BioData>(url);
    }
    
    follow(currentUserId: string, userId: string) {
        const url = `https://localhost:7216/api/Users/Follow?currentUserId=${currentUserId}&followerId=${userId}`;
        return this.http.get<boolean>(url);
    }
    
    unFollow(currentUserId: string, userId: string) {
        const url = `https://localhost:7216/api/Users/Unfollow?currentUserId=${currentUserId}&followerId=${userId}`;
        return this.http.delete<boolean>(url);
    }
    

}

