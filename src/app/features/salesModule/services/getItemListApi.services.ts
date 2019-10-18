import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: "root"
})
export class getItemListSerice {

    constructor(private _http: HttpClient) {

    }


    getitemList() {
        return this._http.get(`http://localhost:3000/items`, {
            // withCredentials: true
        })
    }

}


