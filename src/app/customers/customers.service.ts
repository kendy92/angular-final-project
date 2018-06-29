import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  

  //* SET UP AQS API 
  private username: string = "kendy900";
  private apiToken: string = "P0jNLEyrq7BcwUrdjd1R5iGyOywUBIlqIFdukMVKTwXqqoDJBEBHXifLQMFrv1SdH6I1SDMMaJdB8QlJvWrseHe4tUwZVocDuVFnzraJbnkjeF3JCucQbqVFksEgQRTl";
  private table: string = "customers";
  private apiUrl: string = "https://aqsmalhotra.com/aqs-api/apis/request-data.php?username=" + this.username + "&access_token=" + this.apiToken + "&table=" + this.table;

  getCustomers(): Observable<Customer[]> { //* Request all customers from API
    return this.http.get<Customer[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  getCustomerById(rowId?:number): Observable<Customer[]> { //* Request customer details base on ID from API
    return this.http.get<Customer[]>(this.apiUrl + "&row_id=" + rowId)
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
    return throwError (error.statusText);
  }

  constructor(
    private http: HttpClient
  ) { }
}
