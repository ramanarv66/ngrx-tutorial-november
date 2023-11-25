import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { User } from "../models/model";
import { Observable } from "rxjs";
import exp from "constants";

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


    // signup(email: string, password: string): Observable<User> {
    //     return this.httpClient.post<User>(`http://ramana.com`,
    //         { email, password, returnSecureToken: true })

    // }
    signup(email: string, password: string): Observable<User> {
        return this.httpClient.post<User>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,
            { email, password, returnSecureToken: true })

    }

    formateUser(data: any): User {
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
        let user = new User();
        user.email = data.email;
        user.idToken = data.idToken;
        user.expirationDate = expirationDate;
        return user;
    }

    setUserInLocalStorage(user: User) {
        sessionStorage.setItem('userData', JSON.stringify(user));
        this.runTimeoutInterval(user)
    }

    getUserFromLocalStorage() {

        let userData = sessionStorage.getItem('userData');
        if (userData) {
            let user = JSON.parse(userData);
            let userObj = new User();
            userObj.email = user.email;
            userObj.idToken = user.idToken;
            userObj.expirationDate = new Date(user.expirationDate);
            this.runTimeoutInterval(user)


        }
        return null;
    }


    runTimeoutInterval(user: User) {
        if(user){
            
        let timeInterval = new Date(user.expirationDate).getTime();
        let todayDate = new Date().getTime();
        let expireTime = todayDate - timeInterval;

        setTimeout(() => {
                // outo logout or refresh tokean
        }, expireTime);

    }
}
}