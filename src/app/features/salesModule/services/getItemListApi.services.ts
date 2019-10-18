import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class getItemListService {

    constructor(private _http: HttpClient) {

    }
    getitemList() {
        console.log("Loaded");
        return this._http.get(`http://localhost:3000/items`, {

            // withCredentials: true
        })
    }
}


