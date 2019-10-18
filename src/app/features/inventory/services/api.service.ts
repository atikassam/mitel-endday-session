import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: "root"
})
export class ApiServices {
    static readonly _BASE_ = 'http://localhost:3000'
    constructor(private http: HttpClient) { }
    getItems() {
        return this.http.get(`${ApiServices._BASE_}/items`, {})
    }
    getItemById(itemId: any) {
        return this.http.get(`${ApiServices._BASE_}/items/${itemId}`, {})

    }
    addItem(item: any): any {
        return this.http.post(`${ApiServices._BASE_}/items`, item)
    }
}