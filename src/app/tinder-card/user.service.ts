import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { catchError, map, throwError } from 'rxjs';


@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get<any>('https://randomuser.me/api/?inc=gender,name,age,picture,dob').pipe(
      map((res) => {return res.results[0]}),
      catchError(err => this.handleError(err))
      )
  }


  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  }
}




