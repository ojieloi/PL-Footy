import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  // Gets season table
  getTable() {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2020-2021';
    return this.http.get(url).pipe(map((res: any) => {
      return res;
    }))
  }
}
