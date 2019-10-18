import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ApiServices} from "../../../services/api.services";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: "root"
})
export class AuthApiServices {
  constructor(private http: HttpClient) {}


  login() {
    return this.http.get(`${ ApiServices._BASE_ }/login`, {
      // withCredentials: true
    })
      .pipe(map((data: any) => {
        localStorage.setItem('token', JSON.stringify(data.token || {}))
        return data
      }))
  }
}
