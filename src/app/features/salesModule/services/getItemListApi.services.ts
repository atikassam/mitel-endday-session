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

    postOrderDetails(item): any {
        console.log("Item", item);
        debugger;
        return this._http.post(`http://localhost:3000/orders`, {
            "customer": {
                "id": item[0].customerId,
                "name": "Saravana",
                "address": "Customer address"
            },
            "items": [
                {
                    "Id": item[0].id,
                    "count": item[0].count,
                    "price": item[0].price,
                    "name": item[0].name
                }
            ],
            "total": "100",
            "date": 123456789
        }).pipe(map((data) => {
            console.log("data", data);

            return data;
        }))
    }
}


