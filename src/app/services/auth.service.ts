import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { User } from "../models/model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient) {

    }// https://firebase.google.com/docs/reference/rest/auth?hl=en&authuser=0#section-sign-in-email-password
    login(email: string, password: string): Observable<User> {
        return this.httpClient.post<User>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,
            { email, password, returnSecureToken: true })

    }

    formateUser(data: any): User {
        let user = new User();
        user.email = data.email;
        user.idToken = data.idToken;
        return user;
    }

}