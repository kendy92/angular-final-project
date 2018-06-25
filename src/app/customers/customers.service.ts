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
  private username: string = "kendy92";
  private apiToken: string = "XpC0kCA4UpG0EII5VmJOCVlhWT1BV5zFQjvAXC7oRJlgti3GWxm821s3M79qLQmkcacpZ6fsmDQeX3ugtcEpaMPHG3D5gMbhVdGelytHw7FVLR5gTu4vcx2toekpgzTo";
  private rowId: number = null;
  private table: string = "customers";
  private apiUrl = "https://aqsmalhotra.com/aqs-api/apis/request-data.php?username=" + this.username + "&access_token=" + this.apiToken + "&table=" + this.table;

  getCustomers(): Observable<Customer[]> { //* Request all customers from API
    return this.http.get<Customer[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  getCustomerById(id:number): Observable<Customer> { //* Request customer details base on ID from API
    return this.http.get<Customer>(this.apiUrl + "&row_id=" + this.rowId)
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
