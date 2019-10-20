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
export class AdminService {
  private url = 'http://localhost:5000/admin';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  getUserCount(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/user/count`)
      .pipe(map(this.extractData));
  }

  getProjectCount(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/project/count`)
      .pipe(map(this.extractData));
  }

  getCardCount(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/card/count`)
      .pipe(map(this.extractData));
  }

  getAdminCount(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/count`)
      .pipe(map(this.extractData));
  }

  getTasks(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/tasks`)
      .pipe(map(this.extractData));
  }
  getProjects(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/projects`)
      .pipe(map(this.extractData));
  }

  getAdmins(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/admins`)
      .pipe(map(this.extractData));
  }

  getUsers(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/users`)
      .pipe(map(this.extractData));
  }

  adminify(username): Observable<any> {
    return this.http
      .put<any>(`${this.url}/adminify/${username}`, this.httpOptions)
      .pipe(tap(_ => {
        console.log(`${username} is made into an admin`);
      }));
  }
  removeAdmin(username): Observable<any> {
    return this.http
      .put<any>(`${this.url}/remove/${username}`, this.httpOptions)
      .pipe(tap(_ => {
        console.log(`${username} is removed from admin`);
      }));
  }
  deleteUser(username): Observable<any> {
    return this.http.delete<any>(`${this.url}/delete/${username}`, this.httpOptions).pipe(tap(_ => {
      console.log(`${username} is successfully deleted`);
    }));
  }
}
