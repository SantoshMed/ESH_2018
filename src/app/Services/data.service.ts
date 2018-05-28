import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { AppError } from '../custom/app-error';
import { NotFoundError } from '../custom/not-found-error';
import { BadInput } from '../custom/bad-input';
/* import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Token } from '@angular/compiler'; */

@Injectable()
export class DataService {

    constructor(private url: string, private http: Http) { }

    getCountry(resource) {
        /* const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('Access-Control-Allow-Methods', '*');
        headers.append('Access-Control-Allow-Origin','*');
        let options = new RequestOptions({ headers: headers }); */

        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    create(resource) {
        // return Observable.throw(new AppError());
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    authenticateUser(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => {
                const userV = response.json();
                if (userV.result.userid !== 0) {
                    localStorage.setItem('token', userV.result.token);
                    localStorage.setItem('name', userV.result.firstname);
                    return true;
                } else {
                    return false;
                }
            })
            .catch(this.handleError);
    }

    checkEmailExist(resource) {
        // return Observable.throw(new AppError());
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    forgotPwd(resource) {
        // return Observable.throw(new AppError());
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    isLoggedIn() {
        // return tokenNotExpired();
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        return false;

        /* const jwtHelper = new JwtHelper();
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        const expiredDate = jwtHelper.getTokenExpirationDate(token);
        const isExpired = jwtHelper.isTokenExpired(token);
        return !isExpired; */
    }

    validateToken(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    resetPassword(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        if (error.status === 0) {
            return Observable.throw(new BadInput(error.json()));
        }
        if (error.status === 404) {
            return Observable.throw(new NotFoundError(error.json()));
        }
        return Observable.throw(new AppError(error.json()));
    }

}
