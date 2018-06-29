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
  private apiKey: string = "8DF8FD248DDADE1F75970DCD6480E8E2";
  private accessToken: string = "tCocQSErSg7rop9odYSmErJ3yAyesYGLKQkl8SC59f60LrLE1XuXk9BAISOacraTIgvz9aGGzJaZuABh5iKeVzPxbJkrUpfFgKeuNyb94zKhM71R5dRdLaIqwcswBLdQ";
  private comp: string = "cars";
  private apiUrl: string = "https://stark-app.lilcasoft.info/apis/request-data.php?api_key="+ this.apiKey +"&access_token=" + this.accessToken + "&comp="+ this.comp;

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
