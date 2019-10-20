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
export class ProjectsService {
  private url = 'http://localhost:5002';

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

  getProjects(): Observable<any> {
    return this.http
      .get<any>(`${this.url}/project`)
      .pipe(map(this.extractData));
  }

  getProject(id): Observable<any> {
    return this.http
      .get<any>(`${this.url}/project/${id}`)
      .pipe(map(this.extractData));
  }

  addProject(project) {
    return this.http.post<any>(`${this.url}/project/add`, project);
  }

  deleteProject(id): Observable<any> {
    return this.http
      .delete(`${this.url}/project/delete/${id}`, this.httpOptions)
      .pipe(
        tap(_ => {
          console.log(`Deleted project with ID: ${id}`);
        })
      );
  }
  updateProject(id, updateData) {
    return this.http
      .put<any>(
        `${this.url}/project/update/${id}`,
        JSON.stringify(updateData),
        this.httpOptions
      )
      .pipe(
        tap(_ => {
          console.log(`Project updated with id: ${id}`);
        }),
        catchError(this.handleError<any>('updateProject'))
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
