import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:5003';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/user/profile`)
      .pipe(map(this.extractData));
  }

  updateUser(username, userData): Observable<any> {
    return this.http
      .put<any>(
        `${this.url}/user/update/${username}`,
        JSON.stringify(userData),
        this.httpOptions
      )
      .pipe(
        tap(_ => console.log(`Updated user with ${JSON.stringify(userData)}`)),
        catchError(this.handleError<any>('updateUser'))
      );
  }

  deleteUser(username): Observable<any> {
    return this.http
      .delete<any>(`${this.url}/user/delete/${username}`, this.httpOptions)
      .pipe(
        tap(_ => {
          console.log(`Deleted user=${username}`);
          localStorage.removeItem('token');
        }),
        catchError(this.handleError<any>('deleteUser'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
