import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    constructor(private http: HttpClient) {}



     login(data: any){
     return this.http.post('http://localhost:3000/api/v1/auth/login', data);
    }

    createUserRegister(data: any): Observable<any> {
     return this.http.post('http://localhost:3000/api/v1/auth/register', data);
    }


}
