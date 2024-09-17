import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiObject } from "../models/interface";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiServiceService {
  // this will be a service used to fetch our api

  constructor(private http: HttpClient) {} // injecting the httpclient dependency

  // a function to fetch the data
  getData(endpoint: string): Observable<apiObject> {
    return this.http.get<apiObject>(environment.API_URL + endpoint);
  }
}
