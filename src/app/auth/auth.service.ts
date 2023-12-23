import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, catchError, tap, throwError } from "rxjs";
import { AuthenticatedUser } from "./AuthenticatedUser.model";

@Injectable({ providedIn: 'root' })
export class AuthService {
    user = new Subject<AuthenticatedUser>();
    constructor(private http: HttpClient) {

    }
    logIn(value: any) {
        console.log(value);

        return this.http.post<AuthenticatedUser>("https://localhost:7216/api/Auth/Login", value).pipe(catchError(errorRes => {
            let errorMessage = errorRes.error.message;
            return throwError(errorMessage);
        }), tap(resData => {
            this.handleAuthentication(resData.id, resData.username, resData.fullName, resData.profilePicture, resData.token);
        }))

    }
    signUp(value: any) {
        return this.http.post<AuthenticatedUser>("https://localhost:7216/api/Auth/Register", value).pipe(tap(resData => {
            this.handleAuthentication(resData.id, resData.username, resData.fullName, resData.profilePicture, resData.token);
        }))
    }

    private handleAuthentication(
        id: string,
        username: string,
        profilePicture: string,
        fullName: string,
        token: string | null
    ) {

        const tokenDurationInMilliseconds = 5 * 60 * 1000; // 5 minutes in milliseconds
        const expirationDate = new Date(new Date().getTime() + tokenDurationInMilliseconds);
        const user = new AuthenticatedUser(id, fullName, username, profilePicture, token, expirationDate);
        this.user.next(user);
    }
}