import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getDAta() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    return this.http.get(url);
  }
}
