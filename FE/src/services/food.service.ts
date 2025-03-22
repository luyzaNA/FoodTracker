import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../shared/env";
import {Observable} from "rxjs";
import {FoodI} from "../shared/FoodI";

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = `${environment.apiUrl}/food`;

  constructor(private http: HttpClient) { }

  addFood(food: FoodI): Observable<FoodI> {
    return this.http.post<FoodI>(this.apiUrl, food);
  }
}
