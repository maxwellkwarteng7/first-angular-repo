import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { apiObject } from "../models/interface";
import { environment } from "../../environments/environment";
import { Client } from "../models/class";

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

  addClientData(endpoint: string, payload: Client): Observable<apiObject> {
    return this.http.post<apiObject>(environment.API_URL + endpoint, payload);
  }

  //deleting the the client
  deleteClient(endpoint: string, id: number): Observable<apiObject> {
    return this.http.delete<apiObject>(
      environment.API_URL + endpoint + `?ClientId=${id}`
    );
  }

  //fetching all client projects
  getAllClientProjects(endpoint: string): Observable<apiObject> {
    return this.http.get<apiObject>(environment.API_URL + endpoint);
  }

  // posting all the projects
  addNewClientProject(
    endpoint: string,
    payload: Client
  ): Observable<apiObject> {
    return this.http.post<apiObject>(environment.API_URL + endpoint, payload);
  }
}
