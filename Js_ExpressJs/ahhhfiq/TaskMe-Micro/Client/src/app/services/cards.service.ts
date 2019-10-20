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
export class CardService {
  private url = 'http://localhost:5001';

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

  getCards(projectID): Observable<any> {
    return this.http.get<any>(`${this.url}/card/${projectID}`).pipe(map(this.extractData));
  }

  addCard(card, projectID) {
    return this.http.post<any>(`${this.url}/card/add/${projectID}`, card);
  }

  updateStatus(id) {
    return this.http.put(`${this.url}/card/status/${id}`, this.httpOptions);
  }

  deleteCard(id): Observable<any> {
    return this.http
      .delete(`${this.url}/card/delete/${id}`, this.httpOptions)
      .pipe(
        tap(_ => {
          console.log(`Deleted card with ID: ${id}`);
        })
      );
  }
}
