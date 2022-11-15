import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AlticciService {
  constructor(private http: HttpClient) {}

  getAlticciIndex(index: number) {
    return this.http
      .get(`http://localhost:8080/alticci/${index}`)
      .pipe(map((response: any) => response));
  }
}
