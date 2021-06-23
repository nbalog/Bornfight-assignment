import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AppService {

  constructor(private http: HttpClient) {}

  public battle(soldiers1: number, soldiers2: number) {
    let params = new HttpParams();
    params = params.append('army1', soldiers1);
    params = params.append('army2', soldiers2);
    this.http.get("http://localhost:3000/battle", { params: params, responseType: "text"}).subscribe(result => {
      alert("Winner is: " + result);
    });
  }

}
