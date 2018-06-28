import { Injectable } from '@angular/core';
import { Car } from './car';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  /* SET UP STARK API */
  private apiKey: string = "CF89A7237DE76C8F8C0F26D6C26AB063";
  private accessToken: string = "wyPBghY5XDpfPjYv3og5gUr6zfdAPMOCBm1gO9MDboRMQkYlUboVc3edxeMSAhExTzl05uW095u80HIaj8HZ24uTOQz8qL9b8ZMkmxNH4diVyuJQfjfYoteNMyZ0flfN";
  private comp: string = "cars";
  private apiUrl: string = "http://stark-app.lilcasoft.info/apis/request-data.php?api_key="+ this.apiKey +"&access_token=" + this.accessToken + "&comp="+ this.comp;

  getCars(): Observable< Car[] > {
    return this.http.get< Car[] >(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  getCarByKey(key?:number): Observable<Car[]> { 
    return this.http.get<Car[]>(this.apiUrl + "&comp_key=" + key)
    .pipe(
      catchError(this.handleError)
    );
  }


    //* error handling function
    private handleError(error: HttpErrorResponse) {
      if(error.error instanceof ErrorEvent) {
        console.error('An error occurred: ', error.error.message);
      } else {
        console.error(`Backend returned code ${error.status}, message was: ${error.statusText}`);
      }
      return throwError ('Something very bad happened!');
    }


  constructor(
    private http: HttpClient
  ) { }
}
