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
  private apiKey: string = "26EA119221E43394DDCED523590FE052";
  private accessToken: string = "VamLfnwJewwTcnPpFDJ57BV5lwxZyfmsN9KlvOjFF1wxbrwrbXI2xkrYykCedQ1ys1PQtziM0lO4g8Eu3BGxJDtcHxY7k4gY1sujLrNn7hVH5S1Bc9ugRDt6kwKHKvBL";
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
