import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  employeeUrl = "http://localhost:3000/posts";
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient,) {
  }

  postEmployee(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res;
      }));
  };

  getEmployee() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res;
      }));
  }

  // updateEmployee(data: any, id: number) {
  //   return this.http.put<any>("http://localhost:3000/posts" + id, data)
  //     .pipe(map((res: any) => {
  //       return res;
  //     }));
  // };

  // deleteEmployee(id: number) {
  //   return this.http.delete<any>("http://localhost:3000/posts" + id)
  //     .pipe(map((res: any) => {
  //       return res;
  //     }));
  // }


  deleteEmployee(id: number): Observable<any> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.delete<any>(url, this.httpOptions).pipe();
  };

  updateEmployee(item: any, id:number): Observable<any> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.put(url, item, this.httpOptions).pipe();

  }

}
